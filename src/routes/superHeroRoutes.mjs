//Define las rutas necesarias para cada operación del controlador.

import express from 'express';

import {
    obtenerTodosLosSuperheroesPorIdController,
    obtenerTodosLosSuperheroesController,
    obtenerSuperheroePorIdController,
    obtenerSuperheroesMasPoderososTierraController,
    obtenerSuperheroesMenosPoderososTierraController,
    buscarSuperheroesPorAtributoController,
    agregarNuevoSuperheroeController,
    editarSuperheroePorIdController,
    borrarSuperheroePorIdController,
    //borrarSuperheroePorNombreController
    
} from '../controllers/superheroesController.mjs';

const router = express.Router();

//GET
//Collection
router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/id', obtenerTodosLosSuperheroesPorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
router.get('/heroes/mas-poderosos-tierra', obtenerSuperheroesMasPoderososTierraController);
router.get('/heroes/menos-poderosos-tierra', obtenerSuperheroesMenosPoderososTierraController)
//Document
router.get('/heroes/id/:id', obtenerSuperheroePorIdController);
//POST
router.post('/heroes/nuevo', agregarNuevoSuperheroeController)
//PUT
router.put('/heroes/editar/id/:id', editarSuperheroePorIdController) 
//DELETE
router.delete('/heroes/borrar/id/:id', borrarSuperheroePorIdController)
//router.delete('heroes/borrar-nombre/:nombre', borrarSuperheroePorNombreController)

export default router;