import mongoose from 'mongoose';

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/tienda', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;


const editorialSchema = new mongoose.Schema({
   ID: Number,
   NombreEditorial: String,
   NumeroDeTitulos: Number
});

const sagasSchema = new mongoose.Schema({
	ID: Number,
	NombreSaga: String,
    NumeroDeTitulos: Number
});

const stockconduccionSchema = new mongoose.Schema({
  ID: Number,
  Nombre: String,
  Editorial: String,
  Saga: String,
  Precio: Number,
  Stock: Number
 });

const editorial = mongoose.model('editorial', editorialSchema);
const sagas = mongoose.model('sagas', sagasSchema);
const stockconduccion = mongoose.model('stockconduccion', stockconduccionSchema);


const datoseditorial = [
    {ID: 301, NombreEditorial: 'Microsoft', NumeroDeTitulos: 3 },
    {ID: 302, NombreEditorial: 'Sony', NumeroDeTitulos: 2 },
    {ID: 303, NombreEditorial: 'EA', NumeroDeTitulos: 3 }
];
const datossagas = [
    {ID: 201, NombreSaga: 'Forza Horizon', NumeroDeTitulos: 3 },
    {ID: 202, NombreSaga: 'Gran Turismo', NumeroDeTitulos: 2 },
    {ID: 203, NombreSaga: 'F1', NumeroDeTitulos: 3 }
];
	
const datosstockconduccion = [
    { ID: 101, Nombre: 'Forza Horizon 3', Editorial: 'Microsoft', Saga: 'Forza Horizon', Precio: '39.99', Stock: '3'},
    { ID: 102, Nombre: 'Forza Horizon 4', Editorial: 'Microsoft', Saga: 'Forza Horizon', Precio: '49.99', Stock: '28'},
    { ID: 103, Nombre: 'Forza Horizon 5', Editorial: 'Microsoft', Saga: 'Forza Horizon', Precio: '69.99', Stock: '176'},
    { ID: 104, Nombre: 'Gran Turismo 5', Editorial: 'Sony', Saga: 'Gran Turismo', Precio: '24.99', Stock: '7'},
    { ID: 104, Nombre: 'Gran Turismo 7', Editorial: 'Sony', Saga: 'Gran Turismo', Precio: '59.99', Stock: '168'},
    { ID: 106, Nombre: 'F1 21', Editorial: 'EA', Saga: 'F1', Precio: '19.99', Stock: '1'},
    { ID: 107, Nombre: 'F1 22', Editorial: 'EA', Saga: 'F1', Precio: '39.99', Stock: '14'},
    { ID: 108, Nombre: 'F1 23', Editorial: 'EA', Saga: 'F1', Precio: '59.99', Stock: '210'},
	];


db.once('open', async () => {
    try {
       await editorial.deleteMany({});
	   await sagas.deleteMany({});
	   await stockconduccion.deleteMany({});
        
       await editorial.insertMany(datoseditorial);
	   await sagas.insertMany(datossagas);
	   await stockconduccion.insertMany(datosstockconduccion);
        
       console.log('Datos insertados correctamente en las colecciónes "editorial","sagas" y "stockconduccion" de MongoDB.');
        
		mongoose.connection.close();
		
		
    } catch (error) {
        console.error('Error al insertar datos:', error);
    }
});
