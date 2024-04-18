import mongoose from 'mongoose';

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/tienda', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;


const editorialsmesaSchema = new mongoose.Schema({
   id: Number,
   nombre: String,
   juegos_en_tienda: Number
});
editorialsmesaSchema.index({ id: 1},{ unique: true });

const generosmesaSchema = new mongoose.Schema({
	ID: Number,
	Genero: String
});
generosmesaSchema.index({ ID: 1 }, { unique: true });

const stocksmesaSchema = new mongoose.Schema({
  ID: Number,
  Nombre: String,
  Unidades:Number,
  Genero:String,
  Editorial:String,
  Precio:String
 });
 stocksmesaSchema.index({ ID: 1 }, { unique: true });

const editorialsmesa = mongoose.model('editorials', editorialsmesaSchema);
const generosmesa= mongoose.model('generos', generosmesaSchema);
const stocksmesa = mongoose.model('stocks', stocksmesaSchema);


const datoseditoriasls = [
    { id: 1, nombre: 'Zacatrus', juegos_en_tienda: 1 },
    {id: 2, nombre: 'Libellud', juegos_en_tienda: 1 },
    {id: 3, nombre: 'Tranjis Games', juegos_en_tienda: 1 },
    {id: 4, nombre: 'Z-Man Games', juegos_en_tienda: 1 },
    {id: 5, nombre: 'Devir', juegos_en_tienda: 1 }
];

const datosgenerosmesa = [
    { ID: 1, Genero: 'Party'},
    {ID: 2, Genero: 'Abstracto'},
    {ID: 3, Genero: 'RPG'},
    {ID:4, Genero: 'Rogue-Like'},
    {ID: 5, Genero: 'Estrategia'}
];
	
const datosstocksmesa = [
    { ID: 1, Nombre: 'Unanimo', Unidades: 25, Genero: 'Party', Editorial: 'Zacatrus', Precio: '13.95€'}
    ,{ ID: 4, Nombre: 'Dixit', Unidades: 25, Genero: 'Party Abstracto', Editorial: 'Libellud', Precio: '29.50€'},
    { ID: 2, Nombre: 'Mini Rogue', Unidades: 12, Genero: 'Rpg Rogue-Like', Editorial: 'Tranjis Fames', Precio: '22.95€'},
    { ID: 3, Nombre: 'Pandemic', Unidades: 39, Genero: 'Cooperativo', Editorial: 'Z-Man Games', Precio: '29.99€'},
    { ID: 5, Nombre: 'Catan', Unidades: 67, Genero: 'Estrategia', Editorial: 'Devir', Precio: '45€'}
	];


db.once('open', async () => {
    try {
       await editorialsmesa.deleteMany({});
	   await generosmesa.deleteMany({});
	   await stocksmesa.deleteMany({});
        
       await editorialsmesa.insertMany(datoseditoriasls);
	   await generosmesa.insertMany(datosgeneros);
	   await stocksmesa.insertMany(datosstocks);
        
       console.log('Datos insertados correctamente en las colecciónes "editorials","generos" y "stocks" de MongoDB.');
        
		mongoose.connection.close();
		
		
    } catch (error) {
        console.error('Error al insertar datos:', error);
    }
});
