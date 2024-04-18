import mongoose from 'mongoose';

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/tienda', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;


const editorialSchema = new mongoose.Schema({
   ID: Number,
   NombreEditorial: String,
   NumeroDeTitulos: Number
});
editorialSchema.index({ID:1},{unique:true});

const sagasSchema = new mongoose.Schema({
	ID: Number,
	NombreSaga: String,
    NumeroDeTitulos: Number
});
sagasSchema.index({ID:1},{unique:true});

const stockconduccionSchema = new mongoose.Schema({
  ID: Number,
  Nombre: String,
  Editorial: String,
  Saga: String,
  Precio: Number,
  Stock: Number
 });
stockconduccionSchema.index({ID:1},{unique:true});

const desarrolladoraSchema = new mongoose.Schema({
  ID: Number,
  Desarrolladora: String
});

desarrolladoraSchema.index({ ID: 1 }, { unique: true });

const generoSchema = new mongoose.Schema({
 ID: Number,
 Genero: String
});

generoSchema.index({ ID: 1 }, { unique: true });

const stockSchema = new mongoose.Schema({
 ID: Number,
 Nombre: String,
 stock: Number,
 Genero: String,
 Desarrollador: String,
 Precio: Number
});

stockSchema.index({ ID: 1 }, { unique: true });

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

const empleadosSchema = new mongoose.Schema({
  id: Number,
  nombre: String,
  apellido: String,
  correo: String,
  telefono: String,
  direccion: String,
  fecha_contratacion: Date,
  salario: Number,
  cargo: String
});
empleadosSchema.index({ id: 1 }, { unique: true });

const encargosSchema = new mongoose.Schema({
  id:{type:Number},
  id_cliente:{type:Number},
  id_producto:{type:Number},
  cantidad:{type:Number},
  total_venta:{type:mongoose.Types.Decimal128},
  fecha_venta:{type: Date, default: Date.now}
  });
encargosSchema.index({ id: 1 }, { unique: true });

const miembrosSchema = new mongoose.Schema({
  id:{type:Number},
  nombre:{type:String},
  apellido:{type:String},
  correo:{type:String},
  telefono:{type:String},
  direccion:{type:String}
  });
miembrosSchema.index({ id: 1 }, { unique: true });

const editorial = mongoose.model('editorial', editorialSchema);
const sagas = mongoose.model('sagas', sagasSchema);
const stockconduccion = mongoose.model('stockconduccion', stockconduccionSchema);
const desarrolladora = mongoose.model('desarrolladora', desarrolladoraSchema);
const genero = mongoose.model('genero', generoSchema);
const stock = mongoose.model('stock', stockSchema);
const editorialsmesa = mongoose.model('editorialsmesa', editorialsmesaSchema);
const generosmesa = mongoose.model('generosmesa', generosmesaSchema);
const stocksmesa = mongoose.model('stocksmesa', stocksmesaSchema);
const empleados = mongoose.model('empleados', empleadosSchema);
const encargos = mongoose.model('encargos', encargosSchema);
const miembros = mongoose.model('miembros', miembrosSchema);


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
    { ID: 105, Nombre: 'Gran Turismo 7', Editorial: 'Sony', Saga: 'Gran Turismo', Precio: '59.99', Stock: '168'},
    { ID: 106, Nombre: 'F1 21', Editorial: 'EA', Saga: 'F1', Precio: '19.99', Stock: '1'},
    { ID: 107, Nombre: 'F1 22', Editorial: 'EA', Saga: 'F1', Precio: '39.99', Stock: '14'},
    { ID: 108, Nombre: 'F1 23', Editorial: 'EA', Saga: 'F1', Precio: '59.99', Stock: '210'},
	];

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

const datoseditoriasls = [
  {id: 1, nombre: 'Zacatrus', juegos_en_tienda: 1 },
  {id: 2, nombre: 'Libellud', juegos_en_tienda: 1 },
  {id: 3, nombre: 'Tranjis Games', juegos_en_tienda: 1 },
  {id: 4, nombre: 'Z-Man Games', juegos_en_tienda: 1 },
  {id: 5, nombre: 'Devir', juegos_en_tienda: 1 }
];

const datosgenerosmesa = [
  {ID: 1, Genero: 'Party'},
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

const datosEmpleados = [
  { id: 1, nombre: 'Carlos', apellido: 'Gonzalez', correo: 'carlos@gmail.com', telefono: '124-226-333', direccion: 'Av. Libertador 123', fecha_contratacion: new Date('2023-01-15'), salario: 2500.00, cargo: 'Gerente' },
  { id: 2, nombre: 'Ana', apellido: 'Lopez', correo: 'ana@hotmail.com', telefono: '192-273-945', direccion: 'Calle 456', fecha_contratacion: new Date('2023-02-20'), salario: 1800.00, cargo: 'Vendedor'},
  { id: 3, nombre: 'Pedro', apellido: 'Rodriguez', correo: 'pedro@gmail.com', telefono: '123-594-190', direccion: 'Av. Bolivar 789', fecha_contratacion: new Date('2023-03-20'), salario: 2000.00, cargo: 'Cajero'},
  { id: 4, nombre: 'Ramiro', apellido: 'Gutierrez', correo: 'RamirG@hotmail.com', telefono: '102-591-145', direccion: 'Av. Camargo 234', fecha_contratacion: new Date('2023-05-20'), salario: 2000.00, cargo: 'Almacén'}
];

const datosEncargos = [
  { id: 5, id_cliente: 1, id_producto: 1, cantidad: 2, total_venta: 119.98, fecha_venta: new Date('2023-04-01 10:30:00') },
  { id: 6, id_cliente: 2, id_producto: 2, cantidad: 1, total_venta: 49.94, fecha_venta: new Date('2023-05-15 14:45:00') },
  { id: 7, id_cliente: 3, id_producto: 3, cantidad: 3, total_venta: 209.97, fecha_venta: new Date('2023-06-20 16:20:00') },
  { id: 8, id_cliente: 1, id_producto: 2, cantidad: 1, total_venta: 49.99, fecha_venta: new Date('2023-07-10 09:00:00') }
];

const datosMiembros = [
  { id: 1, nombre: 'Juan', apellido: 'Perez', correo: 'juan12@gmail.com', telefono: '123-456-789', direccion: 'Calle 123, Ciudad'},
  { id: 2, nombre: 'Maria', apellido: 'Gomez', correo: 'maria@hotmail.com', telefono: '456-789-023', direccion: 'Av Principal, Pueblo'},
  { id: 3, nombre: 'Luis', apellido: 'Martinez', correo: 'luis@gmail.com', telefono: '789-012-346', direccion: 'Apartado Postal 456, Villa'},
  { id: 4, nombre: 'Sergio', apellido: 'Torres', correo: 'SergioT@gmail.com', telefono: '259-101-023', direccion: 'Calle 123, Ciudad'},
];

db.once('open', async () => {
    try {
     await editorial.deleteMany({});
	   await sagas.deleteMany({});
	   await stockconduccion.deleteMany({});
     await desarrolladora.deleteMany({});
	   await genero.deleteMany({});
	   await stock.deleteMany({});
     await editorialsmesa.deleteMany({});
	   await generosmesa.deleteMany({});
	   await stocksmesa.deleteMany({});
     await empleados.deleteMany({});
     await encargos.deleteMany({});
     await miembros.deleteMany({});
        
     await editorial.insertMany(datoseditorial);
	   await sagas.insertMany(datossagas);
	   await stockconduccion.insertMany(datosstockconduccion);
     await desarrolladora.insertMany(datosdesarrolladora);
	   await genero.insertMany(datosgenero);
	   await stock.insertMany(datosstock);
     await editorialsmesa.insertMany(datoseditoriasls);
	   await generosmesa.insertMany(datosgenerosmesa);
	   await stocksmesa.insertMany(datosstocksmesa);
     await empleados.insertMany(datosEmpleados);
     await encargos.insertMany(datosEncargos);
     await miembros.insertMany(datosMiembros)
        
       console.log('Datos de la tienda insertados correctamente en MongoDB.');
        
		mongoose.connection.close();
		
		
    } catch (error) {
        console.error('Error al insertar datos:', error);
    }
});
