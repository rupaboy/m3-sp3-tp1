//Repositorio centralizado que implementa los métodos definidos en la interfáz,
//realizando operaciones de datos uniformes y controladas con MongoDB

import superHero from '../models/SuperHero.mjs';
import IRepository from '../repositories/IRepository.mjs';

class SuperHeroRepository extends IRepository {
    async obtenerPorId(id) {;  //Funciona
        return await superHero.findById(id)
    }

    async obtenerTodos() {  //Funciona
        return await superHero.find();
    }
    
    async buscarPorAtributo(atributo, valor) { //Funciona
        return await superHero.find({
            [ atributo ]: valor
        });
    }

    async obtenerMayoresDe30() { //Funciona
        return await superHero.find({
            edad: { $gt: 30 },
            planetaOrigen: "Tierra",
            $expr: { $gte: [{ $size: "$poderes" }, 2 ]}
        });
    }
};

export default new SuperHeroRepository();