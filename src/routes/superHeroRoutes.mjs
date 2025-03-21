//Define las rutas necesarias para cada operación del controlador.

import express from 'express';

import {
    obtenerTodosLosSuperheroesPorIdController,
    obtenerTodosLosSuperheroesController,
    obtenerSuperheroePorIdController,
    obtenerSuperheroesMasPoderososTierraController,
    obtenerSuperheroesMenosPoderososTierraController,
    buscarSuperheroesPorAtributoController,
    buscarIdSuperheroesPorAtributoController,
    agregarNuevoSuperheroeController,
    agregarNuevoTemplateSuperheroeController,
    agregarNuevoArraySuperheroesController,
    editarSuperheroePorIdController,
    borrarSuperheroePorIdController,
    borrarSuperheroePorNombreController,
    obtenerSuperheroesSinPoderesTierraController
    
} from '../controllers/superheroesController.mjs';

const router = express.Router();

//GET
//Collection
router.get('/heroes', obtenerTodosLosSuperheroesController); // OK
router.get('/heroes/id', obtenerTodosLosSuperheroesPorIdController);
router.get('/heroes/atributo/:atributo/:valor', buscarSuperheroesPorAtributoController);
router.get('/heroes/id/:atributo/:valor', buscarIdSuperheroesPorAtributoController);
router.get('/heroes/mas-poderosos-tierra', obtenerSuperheroesMasPoderososTierraController);
router.get('/heroes/menos-poderosos-tierra', obtenerSuperheroesMenosPoderososTierraController)
router.get('/heroes/sin-poderes-tierra', obtenerSuperheroesSinPoderesTierraController)
//Document
router.get('/heroes/id/:id', obtenerSuperheroePorIdController);
//POST
router.post('/heroes/nuevo', agregarNuevoSuperheroeController)
router.post('/heroes/nuevo/template', agregarNuevoTemplateSuperheroeController)
router.post('/heroes/nuevo/array', agregarNuevoArraySuperheroesController)
//PUT
router.put('/heroes/editar/id/:id', editarSuperheroePorIdController) 
//DELETE
router.delete('/heroes/borrar/id/:id', borrarSuperheroePorIdController)
router.delete('/heroes/borrar/nombre/:nombre', borrarSuperheroePorNombreController)

export default router;