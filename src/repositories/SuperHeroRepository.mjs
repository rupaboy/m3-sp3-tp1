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

    async agregarNuevo() { //Funciona
        const hero = new superHero( {
            nombreSuperHeroe: 'Prometeo',
            nombreReal: 'Lucio Lux',
            edad: 25,
            planetaOrigen: 'Tierra',
            debilidad: 'Aislamiento',
            poderes: ['Energía infinita', 'Fisión nuclear', 'Termo-conducción', 'Salto atmosférico'],
            aliados: ['Doomsday'],
            enemigos: ['Superman'],
            creador: 'Rupaboy'
        });
        return await hero.save()
    }

    async editar() { //Funciona, utiliza findOneAndUpdate() con 'after'.
        return await superHero.findOneAndUpdate(
            {nombreSuperHeroe: 'Prometeo' },
            { $set: { edad: 50 } },
            { returnDocument: 'after' }
        );
    }

    async borrarId(id) { // Método predecible (se me ocurrió una idea en inglés)
        return await superHero.findOneAndDelete(id)
    }

};

export default new SuperHeroRepository();