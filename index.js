
var express = require("express");
var cool = require("cool-ascii-faces");
var port = process.env.PORT || 12345;
var app = express();
var useMAS = require("./samples/MAS");
//var useLMP = require("./samples/LMP");
var useCGM = require("./samples/CGM");
const campingsFilePath = 'ddbb/camping-andalusia.json';
const fs = require('fs');
const BASE_API_URL = "/api/v1";
const bodyParser = require("body-parser");
app.use(bodyParser.json());


app.get("/cool", (req,res) => {
    res.send(cool());
    console.log("New request");
});
//L05
app.get("/samples/MAS", useMAS);
//app.get("/samples/LMP", useLMP);
app.get("/samples/CGM", useCGM);

//L06 MAS______________________________________________________________________________________-
let campings = [];

//GET initial data
app.get(BASE_API_URL+'/andalusian-campings/loadInitialData', (req, res) => {
  // Comprobamos si el array campings está vacío
  if (campings.length === 0) {
    // Leemos el archivo de campings
    const campingsData = fs.readFileSync(campingsFilePath);
    // Convertimos el contenido del archivo a un objeto JavaScript
    const campingsArray = JSON.parse(campingsData);
    // Creamos 15 objetos aleatorios a partir del array de campings
    for (let i = 0; i < 15; i++) {
      const randomIndex = Math.floor(Math.random() * campingsArray.length);
      const randomCamping = campingsArray[randomIndex];
      campings.push(randomCamping);
    }
  }
  // Devolvemos los objetos aleatorios como respuesta
  res.json(campings);
});

//GET
app.get(BASE_API_URL+'/andalusian-campings', (req, res) => {
  const query = req.query;

  let filteredCampings = campings;
  //añado que no importe si es mayusculas o minusculas en las busquedas
  for (const key in query) {
    const value = Array.isArray(query[key]) ? query[key].map(val => val.toLowerCase()) : query[key].toLowerCase();
    filteredCampings = filteredCampings.filter(camping => {
      const campingValue = Array.isArray(camping[key]) ? camping[key].map(val => val.toLowerCase()) : camping[key].toLowerCase();
      return campingValue == value || (Array.isArray(campingValue) && campingValue.includes(value));
    });
  }
  
  if (filteredCampings.length > 0) {
    res.json(filteredCampings);
    console.log(`New GET request with query parameters ${JSON.stringify(query)}`);
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});


//Get con 2 valores 
app.get(BASE_API_URL+'/andalusian-campings/:value/:value2?', (req, res) => {
  const value = req.params.value;
  const value2 = req.params.value2;
  //Filtro de error de lista vacía
  if (campings.length == 0) {
    res.status(404).send('Error: Campings list is empty');
    return;
  }
  //Filtro para ver si tengo 1 o 2 valores y filtrar por ambos.
  let filteredCampings = campings.filter(camping => {
    let matchValue = false;
    let matchValue2 = false;

    for (const key in camping) {
      if (camping[key] == value) {
        matchValue = true;
      }

      if (value2 && camping[key] == value2) {
        matchValue2 = true;
      }
    }

    if (value2) {
      return matchValue && matchValue2;
    } else {
      return matchValue;
    }
  });
  if (filteredCampings.length > 0) {
    res.json(filteredCampings);
    console.log(`New GET request for value=${value} and secondValue=${secondValue}`);
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});





//POST con URL prohibido
app.post(BASE_API_URL+'/andalusian-campings/*', (req, res) => {
  res.sendStatus(405);
});

//POST
app.post(BASE_API_URL+'/andalusian-campings', (req, res) => {
  try {
    var newCamping = req.body;
    console.log("New post to /andalusian-campings");
    // Validar si se han proporcionado los campos esperados
    if (!newCamping.name || !newCamping.city || !newCamping.start_date|| !newCamping.id) {
      res.sendStatus(400);
      console.log("no tiene los atributos: id, name,city y/o start_Date")
    } else {
      // Validar si ya existe un camping con el mismo nombre
      var existingCamping = campings.find(camping => camping.name === newCamping.name);
      if (existingCamping) {
        res.sendStatus(409);
      } else {
        // Agregar el nuevo camping al array
        console.log(`newCamping = <${JSON.stringify(newCamping,null,2)}>`);
        campings.push(newCamping);
        res.sendStatus(201);
      }
    }
  } catch (err) {
    res.sendStatus(400);
    console.log("Error con el formato JSON");
  }
});



//PUT
app.put(BASE_API_URL+'/andalusian-campings/:id', (req, res) => {
  const id = req.params.id;
  const updatedCamping = req.body;
  let updated = false;
  // Verificar si se proporcionó un ID en la URL
  if (!id) {
    res.sendStatus(405);
    return;
  }
  // Verificar que el ID proporcionado en la URL coincide con el ID del objeto de camping
  campings.forEach(camping => {
    if (camping.id == id) {
      if (camping.id == updatedCamping.id) {
        Object.assign(camping, updatedCamping);
        updated = true;
        res.sendStatus(200);
        console.log(`Camping ${id} updated: ${JSON.stringify(camping)}`);
      } else {
        res.sendStatus(400);
      }
    }
  });

  if (!updated) {
    res.sendStatus(404);
  }
});


//DELETE all
app.delete(BASE_API_URL+'/andalusian-campings', (req, res) => {
  if (campings.length > 0) {
    campings = [];
    res.sendStatus(200);
    console.log("All campings deleted");
  } else {
    res.sendStatus(404);
  }
});


//DELETE por id
app.delete(BASE_API_URL+'/andalusian-campings/:id', (req, res) => {
  const id = req.params.id;
  let deleted = false;

  campings = campings.filter(camping => {
    if (camping.id != id) {
      return true;
    } else {
      deleted = true;
      return false;
    }
  });

  if (deleted) {
    res.sendStatus(200);
    console.log(`Camping ${id} deleted`);
  } else {
    res.sendStatus(404);
  }
});

//L06 LPM____________________________________________________________________________-


app.listen(port,() =>{
  console.log(`Servidor corriendo en el puerto: ${port}`);
});
