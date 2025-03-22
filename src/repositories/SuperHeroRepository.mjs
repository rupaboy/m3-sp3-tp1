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
        return await SuperHero.find().sort({ nombreSuperHeroe: 1 }) //Orden alfabético!
    }
    
    async buscarPorAtributo(atributo, valor) { //Testing
        return await SuperHero.find({
            [ atributo ]: valor
        });
    }

    async obtenerMasPoderosos() { //OK Old MAYORES-30
        return await SuperHero.find({
            $expr: { $gte: [{ $size: "$poderes" }, 5 ]}
        });
    }

    async obtenerMasPoderososPlaneta( planeta ) { 
        return await SuperHero.find({
                edad: { $gt: 20 },
                planetaOrigen: planeta,
                $expr: { $gte: [{ $size: "$poderes" }, 2 ]}
            });
    }

    async obtenerMenosPoderosos() { //TESTING
        
        return await SuperHero.find(
            {
                edad: { $lt: 110 },
                $or: [
                { poderes: { $size: 1 } },
                { poderes: { $size: 0 } }
                ]
        })
    }

    async obtenerMenosPoderososPlaneta( planeta ) { 
        return await SuperHero.find(
            {
                edad: { $lt: 110 }, //Si son más longevos no apareceran aquí.
                planetaOrigen: planeta,
                $or: [
                { poderes: { $size: 1 } },  
                { poderes: { $size: 0 } }
                ]
            }
        )
    }

    async obtenerSinPoderes() { 
        return await SuperHero.find(
            {
                poderes: { $size: 0 }
            }
        )
    }

    async obtenerSinPoderesPlaneta( planeta ) { 
        return await SuperHero.find(
            {
                planetaOrigen: planeta,
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

        const superheroesCreados = []; //Crea un array
        for (const heroe of arraySuperheroesBackup) { //Itera importación
            const hero = new SuperHero(heroe); //Al constructor
            const heroeNuevo = await hero.save(); //Guarda cada héroe
            superheroesCreados.push(heroeNuevo); //Agrega al array original
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
    
    async editarPorIdAgregarPoder(id, poder) { //Testing, devuelve 'after'.
        return await SuperHero.findOneAndUpdate(
            { _id: id },
            { $push: { poderes: poder } },
            { returnDocument: 'after' }
        );
    }

    async editarPorIdAgregarAliado(id, aliado) { //Testing, devuelve 'after'.
        return await SuperHero.findOneAndUpdate(
            { _id: id },
            { $push: { aliados: aliado } },
            { returnDocument: 'after' }
        );
    }
    
    async editarPorIdAgregarEnemigo(id, enemigo) { //Testing, devuelve 'after'.
        return await SuperHero.findOneAndUpdate(
            { _id: id },
            { $push: { enemigos: enemigo } },
            { returnDocument: 'after' }
        );
    }

    async editarPorIdQuitarPoder(id, poder) { //Testing, devuelve 'after'.
        return await SuperHero.findOneAndUpdate(
            { _id: id },
            { $pull: { poderes: poder } },
            { returnDocument: 'after' }
        );
    }

    async editarPorIdQuitarAliado(id, aliado) { //Testing, devuelve 'after'.
        return await SuperHero.findOneAndUpdate(
            { _id: id },
            { $pull: { aliados: aliado } },
            { returnDocument: 'after' }
        );
    }

    async editarPorIdQuitarEnemigo(id, enemigo) { //Testing, devuelve 'after'.
        return await SuperHero.findOneAndUpdate(
            { _id: id },
            { $pull: { enemigos: enemigo } },
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