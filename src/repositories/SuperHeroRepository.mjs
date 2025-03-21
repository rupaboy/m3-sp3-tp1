//Repositorio centralizado que implementa los métodos definidos en la interfáz,
//realizando operaciones de datos uniformes y controladas con MongoDB

import superHero from '../models/SuperHero.mjs';
import IRepository from '../repositories/IRepository.mjs';

class SuperHeroRepository extends IRepository {
    async obtenerPorId(id) {;  //Funciona
        console.log(id)
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

    async obtenerMasPoderososTierra() { //Funciona VIEJO MAYORES-30
        return await superHero.find({
            edad: { $gt: 30 },
            planetaOrigen: "Tierra",
            $expr: { $gte: [{ $size: "$poderes" }, 2 ]}
        });
    }

    async obtenerMenosPoderososTierra() { //Funciona
        return await superHero.find({
            edad: { $lte: 30 },
            planetaOrigen: "Tierra",
            $expr: { $lte: [{ $size: { $ifNull: ["$poderes", []] }}, 1 ]} 
        });
    }

    async obtenerSinPoderesTierra() { //
        return await superHero.find({
            planetaOrigen: "Tierra",
            $expr: { $eq: [ { $size: "$poderes"}, 0 ] } 
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

    async editarPorId(id) { //Funciona, devuelve 'after'.
        return await superHero.findOneAndUpdate(
            { _id: id },
            { $set: { edad: 50 } },
            { returnDocument: 'after' }
        );
    }

    async borrarPorId(id) { // Funciona
        return await superHero.findByIdAndDelete(id)
    }

    async borrarPorNombre(nombreSuperheroe) { //Test
        return await superHero.findOneAndDelete(
            { nombreSuperHeroe: nombreSuperheroe }
        )
    }

};

export default new SuperHeroRepository();