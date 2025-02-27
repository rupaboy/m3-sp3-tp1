import superHero from './models/SuperHero.mjs'

    async function flujoDeOperaciones() {
        await insertSuperHero();
        //await updateSuperHero('Prometeo')
        //await findSuperHeroes()
        //await deleteSuperHero('Prometeo')
        }
    
    async function insertSuperHero() {
        const hero = new superHero( {
            nombreSuperHeroe: 'Prometeo',
            nombreReal: 'Lucio Lux',
            edad: 25,
            planetaOrigen: 'Tierra',
            debilidad: 'Aislamiento',
            poderes: ['Energía infinita', 'Fisión nuclear', 'Termo-conducción', 'Salto atmosférico'],
            aliados: ['Doomsday'],
            enemigos: ['Superman'],
            creador: 'Rupaboy',
            createdAt: Date()
        });
        await hero.save();
        console.log('Superhéroe insertado:', hero);
    }
    
    async function updateSuperHero(nombreSuperHeroe) {
        const result = await SuperHero.updateOne(
            {nombreSuperHeroe: nombreSuperHeroe },
            { $set: { edad: 30 } }
        );
        console.log('Resultado de la actualización:', result);
    }
    
    async function deleteSuperHero(nombreSuperHeroe) {
        const result = await SuperHero.deleteOne({ nombreSuperHeroe: nombreSuperHeroe });
        console.log('Superhéroe eliminado:', result);
    }
    
    async function findSuperHeroes() {
        const heroes = await SuperHero.find({ planetaOrigen: 'Tierra' });
        console.log('Superhéroes encontrados:', heroes);
    }
    
    //Ejecución:
    flujoDeOperaciones()
