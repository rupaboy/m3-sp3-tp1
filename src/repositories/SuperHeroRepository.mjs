//Repositorio centralizado que implementa los métodos definidos en la interfáz,
//realizando operaciones de datos uniformes y controladas con MongoDB

import superHero from '../models/SuperHero.mjs';
import IRepository from '../repositories/IRepository.mjs';

class SuperHeroRepository extends IRepository {
    async obtenerPorId(id) {;
        return await superHero.findById(id)
    } //Funciona

    async obtenerTodos() {
        return await superHero.find();
    } //Funciona
    
    async buscarPorAtributo(atributo, valor) {
        const superheroes = await superHero.find()
        return superheroes.filter(superheroe =>
            String(superheroe[atributo]).toLowerCase().includes(valor.toLowerCase())
        )
    } //Funciona

    async obtenerMayoresDe30() {
        const superheroes = await superHero.find()
        return superheroes.filter(superheroe => superheroe.edad > 30 );
    }
}

export default new SuperHeroRepository();