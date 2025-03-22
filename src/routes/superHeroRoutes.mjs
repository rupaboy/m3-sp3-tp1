//Define las rutas necesarias para cada operación del controlador.

import express from 'express';

import {
    obtenerTodosLosSuperheroesPorIdController,
    obtenerTodosLosSuperheroesController,
    obtenerSuperheroePorIdController,
    obtenerSuperheroesMasPoderososController,
    obtenerSuperheroesMenosPoderososController,
    obtenerSuperheroesSinPoderesController,
    obtenerSuperheroesMasPoderososPlanetaController,
    obtenerSuperheroesMenosPoderososPlanetaController,
    obtenerSuperheroesSinPoderesPlanetaController,
    buscarSuperheroesPorAtributoController,
    buscarIdSuperheroesPorAtributoController,
    //agregarNuevoSuperheroeController,
    agregarNuevoTemplateSuperheroeController,
    agregarNuevoArraySuperheroesController,
    editarSuperheroePorIdAtributoValorController,
    editarSuperheroePorIdAgregarPoderController,
    editarSuperheroePorIdQuitarPoderController,
    editarSuperheroePorIdAgregarAliadoController,
    editarSuperheroePorIdQuitarAliadoController,
    editarSuperheroePorIdAgregarEnemigoController,
    editarSuperheroePorIdQuitarEnemigoController,
    //editarSuperheroePorIdController,
    borrarSuperheroePorIdController,
    borrarSuperheroePorNombreController,
    
    
} from '../controllers/superheroesController.mjs';

const router = express.Router();

//GET
//Collection
router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/id', obtenerTodosLosSuperheroesPorIdController);
router.get('/heroes/id/:atributo/:valor', buscarIdSuperheroesPorAtributoController);
router.get('/heroes/mas-poderosos/', obtenerSuperheroesMasPoderososController);
router.get('/heroes/mas-poderosos/:planeta', obtenerSuperheroesMasPoderososPlanetaController);
router.get('/heroes/menos-poderosos/', obtenerSuperheroesMenosPoderososController);
router.get('/heroes/menos-poderosos/:planeta', obtenerSuperheroesMenosPoderososPlanetaController);
router.get('/heroes/sin-poderes/', obtenerSuperheroesSinPoderesController);
router.get('/heroes/sin-poderes/:planeta', obtenerSuperheroesSinPoderesPlanetaController);
router.get('/heroes/:atributo/:valor', buscarSuperheroesPorAtributoController);
//Document
router.get('/heroes/:id', obtenerSuperheroePorIdController);

//POST
router.post('/heroes/nuevo/template', agregarNuevoTemplateSuperheroeController) //Template ../helper/templateHeroeNuevo.mjs
router.post('/heroes/nuevo/array', agregarNuevoArraySuperheroesController) //Array ../helper/templateHeroeNuevo.mjs
//router.post('/heroes/nuevo', agregarNuevoSuperheroeController) 

//PUT
router.put('/heroes/:id/:atributo/:valor', editarSuperheroePorIdAtributoValorController) //.../_id/edad/numero de años...
//Arrays
router.put('/heroes/:id/agregar/poder/:poder', editarSuperheroePorIdAgregarPoderController)
router.put('/heroes/:id/quitar/poder/:poder', editarSuperheroePorIdQuitarPoderController)
router.put('/heroes/:id/agregar/aliado/:aliado', editarSuperheroePorIdAgregarAliadoController)
router.put('/heroes/:id/quitar/aliado/:aliado', editarSuperheroePorIdQuitarAliadoController)
router.put('/heroes/:id/agregar/enemigo/:enemigo', editarSuperheroePorIdAgregarEnemigoController)
router.put('/heroes/:id/quitar/enemigo/:enemigo', editarSuperheroePorIdQuitarEnemigoController)
//router.put('/heroes/editar/:id', editarSuperheroePorIdController) //..Pasa un id para editar. Deprecated.

//DELETE
router.delete('/heroes/borrar/id/:id', borrarSuperheroePorIdController)
router.delete('/heroes/borrar/nombre/:nombre', borrarSuperheroePorNombreController)

export default router;