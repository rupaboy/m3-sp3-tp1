const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Grupo-08:grupo08@cursadanodejs.ls9ii.mongodb.net/Node-js')
.then(()=> console.log('Conexión exitosa a MongoDB'))
.catch(error => console.error('Error al conectar a MongoDB:',error));


const vectorDeHeroes = [
    {
        nombreSuperHeroe: 'Patoruzú',
        nombreReal: 'Patoruzú',
        edad: 30,
        planetaOrigen: 'Tierra',
        debilidad: 'Impulsividad',
        poderes: [ 'Fuerza sobrehumana', 'Sabiduría ancestral', 'Super resistencia' ],
        aliados: [ 'Super Hijitus' ],
        enemigos: [ 'Cazador' ],
        creador: 'Rupaboy'
    },
    {
        nombreSuperHeroe: 'El Cazador',
        nombreReal: 'Desconocido',
        edad: 35,
        planetaOrigen: 'Tierra',
        debilidad: 'Inmortalidad',
        poderes: [ 'Fuerza sobrehumana', 'Maestría bélica', 'Resurrección' ],
        aliados: [ 'Nippur de Lagash', 'Tío Pastafrola', 'Diego Maradona' ],
        enemigos: [ 'Super Hijitus', 'Isidoro Cañones', 'Depredador' ],
        creador: 'Rupaboy'
    },
    {
        nombreSuperHeroe: 'Cable',
        nombreReal: 'Nathan Summers',
        edad: 50,
        planetaOrigen: 'Tierra',
        debilidad: 'Fragilidad cibernética',
        poderes: [ 'Telepatía', 'Regeneración acelerada', 'Fuerza aumentada' ],
        aliados: [ 'Deadpool' ],
        enemigos: [ 'Apocalipsis' ],
        creador: 'Rupaboy'
    },
    {
        nombreSuperHeroe: 'She-Ra',
        nombreReal: 'Adora',
        edad: 21,
        planetaOrigen: 'Etheria',
        debilidad: 'Magia Oscura',
        poderes: [ 'Super fuerza', 'Vuelo', 'Sanación', 'Espada Mágica' ],
        aliados: [ 'He-Man', "Bow" ],
        enemigos: [ 'Hordak' ],
        creador: 'Rupaboy'
    }
];


const superheroSchema = new mongoose.Schema({
    nombreSuperHeroe: {type: String, required: true},
    nombreReal: {type: String, required: true},
    edad: {type: Number, min: 0},
    planetaOrigen: {type: String, default: 'Desconocido'},
    debilidad: String,
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    createdAt: {type: Date, default: Date.now},
    creador: String
}, { collection: 'Grupo-08' });

const SuperHero = mongoose.model('SuperHero', superheroSchema);



async function insertSuperHero(heroe) {
    const hero = new SuperHero( {
        nombreSuperHeroe: heroe.nombreSuperHeroe,
        nombreReal: heroe.nombreReal,
        edad: heroe.edad,
        planetaOrigen: heroe.planetaOrigen,
        debilidad: heroe.debilidad,
        poderes: heroe.poderes,
        aliados: heroe.aliados,
        enemigos: heroe.enemigos,
        creador: heroe.creador
    });
    await hero.save();
    console.log('Superhéroe insertado:', hero);
}



async function agregarSuperHeroes(vectorDeHeroes) {
    for (const heroe of vectorDeHeroes) {
        await insertSuperHero(heroe);
    }
    console.log('Todos los heroes han sido añadidos')
}
    
agregarSuperHeroes(vectorDeHeroes);