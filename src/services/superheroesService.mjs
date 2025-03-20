//Implementa la lógica de negocio, con los métodos de repositorio
//Para búsqueda, recuperción y filtrado de datos.

import SuperHeroRepository from '../repositories/SuperHeroRepository.mjs';

export async function obtenerSuperheroePorId(id) {
    return await SuperHeroRepository.obtenerPorId(id);
}

export async function obtenerTodosLosSuperheroes() { 
    return await SuperHeroRepository.obtenerTodos();
} 

export async function buscarSuperheroesPorAtributo(atributo, valor) {
    return await SuperHeroRepository.buscarPorAtributo(atributo, valor)
}

export async function obtenerSuperheroesMayoresDe30() {
    return await SuperHeroRepository.obtenerMayoresDe30();
}

export async function agregarNuevoSuperheroe() {
    return await SuperHeroRepository.agregarNuevo();
}

export async function editarSuperheroe() {
    return await SuperHeroRepository.editar();
}

export async function borrarIdSuperheroe(id) {
    return await SuperHeroRepository.borrarId(id); 
}