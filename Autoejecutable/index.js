import mongoose from 'mongoose';

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/tienda', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;


const editorialsSchema = new mongoose.Schema({
   id: Number,
   nombre: String,
   juegos_en_tienda: Number
});

const generosSchema = new mongoose.Schema({
	ID: Number,
	Genero: String
});

const stocksSchema = new mongoose.Schema({
  ID: Number,
  Nombre: String,
  Unidades:Number,
  Genero:String,
  Editorial:String,
  Precio:String
 });

const editorials = mongoose.model('editorials', editorialsSchema);
const generos = mongoose.model('generos', generosSchema);
const stocks = mongoose.model('stocks', stocksSchema);


const datoseditoriasls = [
    { id: 1, nombre: 'Zacatrus', juegos_en_tienda: 1 },
    {id: 2, nombre: 'Libellud', juegos_en_tienda: 1 },
    {id: 3, nombre: 'Tranjis Games', juegos_en_tienda: 1 },
    {id: 4, nombre: 'Z-Man Games', juegos_en_tienda: 1 },
    {id: 5, nombre: 'Devir', juegos_en_tienda: 1 }
];
const datosgeneros = [
    { ID: 1, Genero: 'Party'},
    {ID: 2, Genero: 'Abstracto'},
    {ID: 3, Genero: 'RPG'},
    {ID:4, Genero: 'Rogue-Like'},
    {ID: 5, Genero: 'Estrategia'}
];
	
const datosstocks = [
    { ID: 1, Nombre: 'Unanimo', Unidades: 25, Genero: 'Party', Editorial: 'Zacatrus', Precio: '13.95€'}
    ,{ ID: 4, Nombre: 'Dixit', Unidades: 25, Genero: 'Party Abstracto', Editorial: 'Libellud', Precio: '29.50€'},
    { ID: 2, Nombre: 'Mini Rogue', Unidades: 12, Genero: 'Rpg Rogue-Like', Editorial: 'Tranjis Fames', Precio: '22.95€'},
    { ID: 3, Nombre: 'Pandemic', Unidades: 39, Genero: 'Cooperativo', Editorial: 'Z-Man Games', Precio: '29.99€'},
    { ID: 5, Nombre: 'Catan', Unidades: 67, Genero: 'Estrategia', Editorial: 'Devir', Precio: '45€'}
	];


db.once('open', async () => {
    try {
       await editorials.deleteMany({});
	   await generos.deleteMany({});
	   await stocks.deleteMany({});
        
       await editorials.insertMany(datoseditoriasls);
	   await generos.insertMany(datosgeneros);
	   await stocks.insertMany(datosstocks);
        
       console.log('Datos insertados correctamente en las colecciónes "editorials","generos" y "stocks" de MongoDB.');
        
		mongoose.connection.close();
		
		
    } catch (error) {
        console.error('Error al insertar datos:', error);
    }
});
