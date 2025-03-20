//Implementa el controlador para gestionar solicitudes HTTP, llamando a services
//Y utilizando las vistas para presentar los datos

import {
    obtenerSuperheroePorId,
    obtenerTodosLosSuperheroes,
    buscarSuperheroesPorAtributo,
    obtenerSuperheroesMayoresDe30,
    agregarNuevoSuperheroe,
    editarSuperheroe,
    borrarIdSuperheroe
    } from '../services/superheroesService.mjs';

import {
    renderizarSuperheroe,
    renderizarListaSuperheroes} from '../views/responseView.mjs';

    
export async function obtenerSuperheroePorIdController(req, res) {
    try {
        const {id} = req.params;
        const superheroe = await obtenerSuperheroePorId(id);
        if (!superheroe) {
            return res.status(404).send({ mensaje: 'Superheroe no encontrado' });
        }

        const superheroeFormateado = renderizarSuperheroe(superheroe);
        res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener el superhéroe',
            error: error.message });
    }
}

export async function obtenerTodosLosSuperheroesController(req, res) {
    try {
        const superheroes = await obtenerTodosLosSuperheroes();

        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener los superhéroes',
            error: error.message });
    }
}

export async function buscarSuperheroesPorAtributoController(req, res) {
    try {
        const {atributo, valor} = req.params;
        const superheroes = await buscarSuperheroesPorAtributo(atributo, valor);
        if (superheroes.length === 0) {
            return res.status(404).send(
                { mensaje: 'No se encontraron superhéroes con ese atributo' });
        }

        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al buscar los superhéroes',
            error: error.message });
    }
}


export async function obtenerSuperheroesMayoresDe30Controller(req, res) {
    try {
        const superheroes = await obtenerSuperheroesMayoresDe30();
        if (superheroes.length === 0) {
            return res.status(404).send(
                { mensaje: 'No se encontraron superhéroes mayores de 30 años' });
        }
        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    } catch (error) {
        res.status(500).send(
            { mensaje: 'Error al obtener superhéroes mayores de 30 años',
            error: error.message });
    }
}

export async function agregarNuevoSuperheroeController(req, res) {
    try {
        
        const superheroeCreado = await agregarNuevoSuperheroe()
        if (superheroeCreado.length === 0) {
            return res.status(404).send(
                { mensaje: 'No se encontró un superhéroe creado' });
        }
        const superheroeFormateado = renderizarSuperheroe(superheroeCreado);
        res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send (
            { mensaje: 'Error al crear superhéroe',
            error: error.message });
    }
}


export async function editarSuperheroeController(req, res) {
    try {
        const superheroeEditado = await editarSuperheroe()
        console.log(superheroeEditado)
        if (superheroeEditado.length === 0) {
            return res.status(404).send(
                { mensaje: 'No se encontró el superhéroe editado'});
        }
        const superheroeFormateado = renderizarSuperheroe(superheroeEditado)
        res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send (
            { mensaje: 'Error al editar superhéroe',
            error: error.message });
    }
}

export async function borrarSuperheroePorIdController(req, res) {
    try {
        const {id} = req.params;
        const superheroeBorrado = await borrarIdSuperheroe(id);
        console.log(superheroeBorrado)
        if (superheroeBorrado.lenght === 0) {
            return res.status(404).send(
                { mensaje: 'No se encontró una _id para borrar superhéroe'});
        }
    } catch (error) {
        res.status(500).send (
            {mensaje: 'Error al borrar superhéroe por Id',
            error: error.message });
        
    }
}
