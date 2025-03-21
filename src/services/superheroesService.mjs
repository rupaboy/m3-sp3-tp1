//Implementa la lógica de negocio, con los métodos de repositorio
//Para búsqueda, recuperción y filtrado de datos.

import SuperHeroRepository from '../repositories/SuperHeroRepository.mjs';

export async function obtenerTodosLosSuperheroes() { 
    return await SuperHeroRepository.obtenerTodos();
} 

export async function obtenerSuperheroePorId(id){
    return await SuperHeroRepository.obtenerPorId(id)
}

export async function buscarSuperheroesPorAtributo(atributo, valor) {
    return await SuperHeroRepository.buscarPorAtributo(atributo, valor)
}

export async function obtenerSuperheroesMasPoderososTierra() {
    return await SuperHeroRepository.obtenerMasPoderososTierra();
}

export async function obtenerSuperheroesMenosPoderososTierra() {
    return await SuperHeroRepository.obtenerMenosPoderososTierra();
}

export async function obtenerSuperheroesSinPoderesTierra() {
    return await SuperHeroRepository.obtenerSinPoderesTierra();
}

export async function agregarNuevoSuperheroe() {
    return await SuperHeroRepository.agregarNuevo();
}

export async function editarSuperheroePorId(id) {
    return await SuperHeroRepository.editar(id);
}

export async function borrarSuperheroePorId(id) {
    return await SuperHeroRepository.borrarPorId(id); 
}