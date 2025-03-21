//Implementa el controlador para gestionar solicitudes HTTP, llamando a services
//Y utilizando las vistas para presentar los datos

import {
    obtenerTodosLosSuperheroes,
    buscarSuperheroesPorAtributo,
    obtenerSuperheroesMasPoderososTierra,
    obtenerSuperheroesMenosPoderososTierra,
    obtenerSuperheroesSinPoderesTierra,
    obtenerSuperheroePorId,
    agregarNuevoSuperheroe,
    editarSuperheroePorId,
    borrarSuperheroePorId,
    borrarSuperheroePorNombre,

    } from '../services/superheroesService.mjs';

import {
    renderizarSuperheroe,
    renderizarListaSuperheroesPorId,
    renderizarListaSuperheroes,
    renderizarSuperheroePorId} from '../views/responseView.mjs';

    
export async function obtenerSuperheroePorIdController(req, res) {
    try {
        const {id} = req.params;
        const superheroe = await obtenerSuperheroePorId(id);
        if (!superheroe) {
            return res.status(404).send({ mensaje: 'Superhéroe por _id no encontrado' });
        }
        //console.log(superheroe)
        const superheroeFormateado = renderizarSuperheroePorId(superheroe);
        res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener Superheroe por _id',
            error: error.message });
    }
}

export async function obtenerTodosLosSuperheroesPorIdController(req, res) {
    try {
        const superheroes = await obtenerTodosLosSuperheroes();
        if (!superheroes) {
            return res.status(404).send({ mensaje: 'No se encontraron _id de superheroes.' });
        }
        const superheroesFormateadosPorId = renderizarListaSuperheroesPorId(superheroes); //Nueva Vista con atributo ID
        res.status(200).json(superheroesFormateadosPorId);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener los _id de los Superheroes',
            error: error.message });
    }
}

export async function obtenerTodosLosSuperheroesController(req, res) {
    try {
        const superheroes = await obtenerTodosLosSuperheroes();

        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener los Superhéroes',
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

export async function buscarIdSuperheroesPorAtributoController(req, res) {
    try {
        const {atributo, valor} = req.params;
        const superheroes = await buscarSuperheroesPorAtributo(atributo, valor);
        if (superheroes.length === 0) {
            return res.status(404).send(
                { mensaje: 'No se encontraron _id de superhéroes con ese atributo' });
        }

        const superheroesFormateados = renderizarListaSuperheroesPorId(superheroes);
        res.status(200).json(superheroesFormateados);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al buscar _id de superhéroes con ese atributo',
            error: error.message });
    }
}

export async function obtenerSuperheroesMasPoderososTierraController(req, res) {
    try {
        const superheroes = await obtenerSuperheroesMasPoderososTierra();
        if (superheroes.length === 0) {
            return res.status(404).send(
                { mensaje: 'No se encontró a los superhéroes más poderosos en la Tierra' });
        }
        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    } catch (error) {
        res.status(500).send(
            { mensaje: 'Error al obtener los superhéroes más poderosos en la Tierra',
            error: error.message });
    }
}

export async function obtenerSuperheroesMenosPoderososTierraController(req, res) {
    try {
        const superheroes = await obtenerSuperheroesMenosPoderososTierra();
        if (superheroes.length === 0) {
            return res.status(404).send(
                { mensaje: 'No se encontró a los superhéroes menos poderosos en la Tierra' });
        }
        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    } catch (error) {
        res.status(500).send(
            { mensaje: 'Error al obtener los superhéroes menos poderosos en la Tierra',
            error: error.message });
    }
}

export async function obtenerSuperheroesSinPoderesTierraController(req, res) {
    try {
        const superheroes = await obtenerSuperheroesSinPoderesTierra();
        if (superheroes.length === 0) {
            return res.status(404).send(
                { mensaje: 'No se encontraron superhéroes sin poderes en la Tierra' });
        }
        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    } catch (error) {
        res.status(500).send(
            { mensaje: 'Error al obtener superhéroes sin poderes en la Tierra',
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


export async function editarSuperheroePorIdController(req, res) {
    try {
        const {id} = req.params;
        const superheroeEditado = await editarSuperheroePorId(id)
        //console.log(superheroeEditado)
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
        const superheroeBorradoPorId = await borrarSuperheroePorId(id);
        //console.log(superheroeBorrado)
        if (superheroeBorradoPorId.lenght === 0) {
            return res.status(404).send(
                { mensaje: 'No se encontró una _id para borrar superhéroe'});
        }
        const superheroeFormateado = renderizarSuperheroePorId(superheroeBorradoPorId)
        res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send (
            {mensaje: 'Error al borrar superhéroe por Id',
            error: error.message });
        
    }
}

export async function borrarSuperheroePorNombreController(req, res) {
    try {
        const {nombre} = req.params;
        const superheroeBorradoPorNombre = await borrarSuperheroePorNombre(nombre);
        if (superheroeBorradoPorNombre.length === 0) {
            return res.status(404).send(
                { mensaje: 'No se encontró el nombre del superhéroe a borrar' });
        }
        const superheroeFormateado = renderizarSuperheroe(superheroeBorradoPorNombre)
        res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al borrar superhéroe con ese nombre',
            error: error.message });
    }
}
