//Define las rutas necesarias para cada operación del controlador.

import express from 'express';

import {
    obtenerSuperheroePorIdController,
    obtenerTodosLosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayoresDe30Controller,
    agregarNuevoSuperheroeController,
    editarSuperheroeController,
    borrarSuperheroePorIdController,
    //borrarSuperheroePorNombreController
    
} from '../controllers/superheroesController.mjs';

const router = express.Router();

router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/buscar-id/:id', obtenerSuperheroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);

router.post('/heroes/nuevo', agregarNuevoSuperheroeController)
router.put('/heroes/editar', editarSuperheroeController)
router.delete('/heroes/borrar-id/:id', borrarSuperheroePorIdController)
//router.delete('heroes/borrar-nombre/:nombre', borrarSuperheroePorNombreController)

export default router;