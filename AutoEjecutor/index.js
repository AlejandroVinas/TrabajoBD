import mongoose from 'mongoose';

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/tienda', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;


const desarrolladoraSchema = new mongoose.Schema({
   ID: Number,
   Desarrolladora: String
});

const generoSchema = new mongoose.Schema({
	ID: Number,
	Genero: String
});

const stockSchema = new mongoose.Schema({
  ID: Number,
  Nombre: String,
  stock: Number,
  Genero: String,
  Desarrollador: String,
  Precio: Number
 });

const desarrolladora = mongoose.model('desarrolladora', desarrolladoraSchema);
const genero = mongoose.model('genero', generoSchema);
const stock = mongoose.model('stock', stockSchema);


const datosdesarrolladora = [
    {ID: 1, Desarrolladora: 'Team Cherry' },
    {ID: 2, Desarrolladora: 'Black Salt Games' },
    {ID: 3, Desarrolladora: 'Garage Heathen' },
    {ID: 4, Desarrolladora: 'Consumer Softproduct' },
    {ID: 5, Desarrolladora: 'Lucas Pope' }
];
const datosgenero = [
    {ID: 1, Genero: 'Metroidvania'},
    {ID: 2, Genero: 'Pesca'},
    {ID: 3, Genero: 'Surrealismo'},
    {ID: 4, Genero: 'Sátira'},
    {ID: 5, Genero: 'Misterio'}
];
	
const datosstock = [
    { ID: 1, Nombre: 'Hollow Knight', stock: 19, Genero: 'Metroidvania', Desarrollador: 'Team Cherry', Precio: 10},
    { ID: 2, Nombre: 'Dredge', stock: 8, Genero: 'Pesca', Desarrollador: 'Black Salt Games', Precio: 5},
    { ID: 3, Nombre: 'Whos Lila', stock: 50, Genero: 'Surrealismo', Desarrollador: 'Garage Heathen', Precio: 10},
    { ID: 4, Nombre: 'Cruelty Squad', stock: 27, Genero: 'Sátira', Desarrollador: 'Consumer Softproducts', Precio: 15},
    { ID: 5, Nombre: 'Return of the Obra Dinn', stock: 6, Genero: 'Misterio', Desarrollador: 'Lucas Pope', Precio: 15}
];


db.once('open', async () => {
    try {
       await desarrolladora.deleteMany({});
	   await genero.deleteMany({});
	   await stock.deleteMany({});
        
       await desarrolladora.insertMany(datosdesarrolladora);
	   await genero.insertMany(datosgenero);
	   await stock.insertMany(datosstock);
        
       console.log('Datos insertados correctamente en las colecciónes "desarrolladora","genero" y "stock" de MongoDB.');
        
		mongoose.connection.close();
		
		
    } catch (error) {
        console.error('Error al insertar datos:', error);
    }
});
