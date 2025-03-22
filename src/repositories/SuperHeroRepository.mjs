//Repositorio centralizado que implementa los métodos definidos en la interfáz,
//realizando operaciones de datos uniformes y controladas con MongoDB

import SuperHero from '../models/SuperHero.mjs';
import IRepository from '../repositories/IRepository.mjs';
import { templateHeroeNuevo, arraySuperheroesBackup } from '../helper/templateHeroeNuevo.mjs';

class SuperHeroRepository extends IRepository {
    async obtenerPorId(id) {;  //OK
        console.log(id)
        return await SuperHero.findById(id)
    }

    async obtenerTodos() {  //OK
        return await SuperHero.find();
    }
    
    async buscarPorAtributo(atributo, valor) { //Testing
        return await SuperHero.find({
            [ atributo ]: valor
        });
    }

    async obtenerMasPoderososTierra() { //OK Old MAYORES-30
        return await SuperHero.find({
            edad: { $gt: 30 },
            planetaOrigen: "Tierra",
            $expr: { $gte: [{ $size: "$poderes" }, 2 ]}
        });
    }

    async obtenerMenosPoderososTierra() { //TESTING
        
        return await SuperHero.find(
            {
            edad: { $lt: 110 }, //Si son más longevos no apareceran aquí.
            planetaOrigen: "Tierra",
            $or: [
                { poderes: { $size: 1 } },  
                { poderes: { $size: 0 } }
            ]
        })
    }


    async obtenerSinPoderesTierra() { 
        return await SuperHero.find(
            {
                planetaOrigen: "Tierra",
                poderes: { $size: 0 }
            }
        )
    }

    async agregarNuevo(newHero) {  //Función genérica para uso futuro.
        const hero = new SuperHero(
            {
                nombreSuperHeroe: newHero.nombreSuperHeroe,
                nombreReal: newHero.nombreReal,
                edad: newHero.edad,
                planetaOrigen: newHero.planetaOrigen,
                debilidad: newHero.debilidad,
                poderes: newHero.poderes,
                aliados: newHero.aliados,
                enemigos: newHero.enemigos,
                creador: newHero.creador
            }
        );
        console.log(hero)
        return await hero.save();
    }

    async agregarNuevoTemplate() { 
        
        const hero = new SuperHero(templateHeroeNuevo);
        console.log(hero)
        return await hero.save();
    }
    
    async agregarNuevoArray() { 

        const superheroesCreados = [];
        for (const heroe of arraySuperheroesBackup) {
            const hero = new SuperHero(heroe);
            const heroeNuevo = await hero.save();
            superheroesCreados.push(heroeNuevo);
            }
            console.log('Todos los heroes han sido añadidos')
            return superheroesCreados
        }
       

    async editarPorId(id) { //
        return await SuperHero.findOneAndUpdate(
            { _id: id },
            { $set: { edad: 50 } },
            { returnDocument: 'after' }
        );
    }

    async editarPorIdAtributoValor(id, atributo, valor) { //Testing, devuelve 'after'.
        return await SuperHero.findOneAndUpdate(
            { _id: id },
            { $set: { [atributo]: valor } },
            { returnDocument: 'after' }
        );
    }


    async borrarPorId(id) { // Testing
        return await SuperHero.findByIdAndDelete(id)
    }

    async borrarPorNombre(nombreSuperheroe) { //Testing
        return await SuperHero.findOneAndDelete(
            { nombreSuperHeroe: nombreSuperheroe }
        )
    }

};

export default new SuperHeroRepository();