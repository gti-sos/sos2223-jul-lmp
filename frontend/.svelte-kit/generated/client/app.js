export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16')
];

export const server_loads = [];

export const dictionary = {
		"/": [3],
		"/about": [4],
		"/analytics": [5],
		"/api/v2/andalusian-campings": [6],
		"/api/v2/immovables": [7],
		"/integrations": [8,[2]],
		"/integrations/lmp/api-immovables/highcharts": [9,[2]],
		"/integrations/lmp/api-immovables/jscharting": [10,[2]],
		"/integrations/lmp/api-immovables/morris": [11,[2]],
		"/integrations/lmp/api-sos/con-proxy": [12,[2]],
		"/integrations/lmp/api-sos/sin-proxy": [13,[2]],
		"/integrations/lmp/apis-externas/paises": [14,[2]],
		"/integrations/lmp/apis-externas/pokemon": [15,[2]],
		"/integrations/lmp/together": [16,[2]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';