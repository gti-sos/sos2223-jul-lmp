
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

//L06 MAS______________________________________________________________________________________

let campings = [];
//__________________________GET initial data
app.get(BASE_API_URL+'/andalusian-campings/loadInitialData', (req, res) => {
  // Comprobamos si el array campings está vacío
  if (campings.length === 0) {
    // Leemos el archivo de campings
    const campingsData = fs.readFileSync(campingsFilePath);
    // Convertimos el contenido del archivo a un objeto JavaScript
    const campingsArray = JSON.parse(campingsData);
    // Obtenemos los primeros 15 objetos del array de campings
    campings = campingsArray.slice(0, 15);
  }
  // Devolvemos los objetos
  res.sendStatus(200);
  res.json(campings);
});

//______________________________GET con rango de busqueda
//andalusian-campings?from=2004&to=2016
app.get('/api/v1/andalusian-campings', (req, res) => {
  const { from, to } = req.query;
  let filteredCampings = campings;
  if (from && to) {
    filteredCampings = campings.filter(camping => {
      const year = camping.start_date.slice(0, 4);
      return year >= from && year <= to;
    });
  }

  res.json(filteredCampings);
});





//______________________________GET con valor y rango de fechas año
//andalusian-campings/value?from=2004&to=2016
app.get(BASE_API_URL+'/andalusian-campings/:value', (req, res) => {
  if (campings.length == 0) {
    res.status(404).send('Error: Campings not found');
    return;
  }
  const value = req.params.value;
  const fromYear = req.query.from;
  const toYear = req.query.to;

  let filteredCampings = campings.filter(camping => {
    let matchValue = false;
    for (const key in camping) {
      if (camping[key] == value) {
        matchValue = true;
      }
    }
    return matchValue;
  });

  if (fromYear && toYear) {
    const filteredByYear = filteredCampings.filter(camping => {
      const year = parseInt(camping.start_date.substring(0, 4));
      return year >= parseInt(fromYear) && year <= parseInt(toYear);
    });
    filteredCampings = filteredByYear;
  }

  if (filteredCampings.length > 0) {
    res.json(filteredCampings);
    console.log(`New GET request for value=${value}, from=${fromYear}, to=${toYear}`);
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});




//______________________________Get con 2 valores 
app.get(BASE_API_URL+'/andalusian-campings/:value/:value2?', (req, res) => {
  const value = req.params.value;
  const value2 = req.params.value2;
  //Filtro de error de lista vacía
  if (campings.length == 0) {
    res.status(404).send('Error: Campings not found');
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

//______________________________POST con URL prohibidas
app.post(BASE_API_URL+'/andalusian-campings/*', (req, res) => {
  res.sendStatus(405);
});

//______________________________POST normal
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



//___________________________________PUT
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


//_________________________DELETE all
app.delete(BASE_API_URL+'/andalusian-campings', (req, res) => {
  if (campings.length > 0) {
    campings = [];
    res.sendStatus(200);
    console.log("All campings deleted");
  } else {
    res.sendStatus(404);
  }
});


//__________________________DELETE por id
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
