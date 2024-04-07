import mongoose from 'mongoose';
import fetch from 'node-fetch';
mongoose.connect('mongodb://127.0.0.1:27017/tienda');


/*
const advisorSchema = new mongoose.Schema({
      s_ID: {type:String},
      i_ID: {type:String}
});

let advisor =new mongoose.model('advisor', advisorSchema);

let API = 'http://localhost:8000';

async function getdata() {
  const res = await fetch(API);
  const data = await res.json();
  console.log(data.advisor);
  try {
    let inserted = await advisor.insertMany(data.advisor);
    //console.log(inserted);
    process.exit(0);
  } catch (e) {
    console.log('Some error');
    console.log(e);
    process.exit(0);
  }
}

getdata();*/

let API = 'http://localhost:8000';

const editorialsSchema = new mongoose.Schema({
   id:{type:Number},
   nombre:{type:String},
   juegos_en_tienda:{type:Number}
});

const generosSchema = new mongoose.Schema({
	ID:{type:Number},
	Genero:{type:String}
});

const stocksSchema = new mongoose.Schema({
  ID:{type:Number},
  Nombre:{type:String},
  Unidades:{type:Number},
  Genero:{type:String},
  Editorial:{type:String},
  Precio:{type:String}
 });
 
 const desarrolladoraSchema = new mongoose.Schema({
   ID:{type:Number},
   Desarrolladora:{type:String}
});

const generoSchema = new mongoose.Schema({
	ID:{type:Number},
	Genero:{type:String}
});

const stockSchema = new mongoose.Schema({
  ID:{type:Number},
  Nombre:{type:String},
  stock:{type:Number},
  Genero:{type:String},
  Desarrollador:{type:String},
  Precio:{type:String}
  });

const stockconduccionSchema = new mongoose.Schema({
  ID:{type:Number},
  Nombre:{type:String},
  Editorial:{type:String},
  Saga:{type:String},
  Precio:{type:Number},
  Stock:{type:Number}
});

const editorialSchema = new mongoose.Schema({
  ID:{type:Number},
  NombreEditorial:{type:String},
  NumeroDeTitulos:{type:Number}
});

const sagasSchema = new mongoose.Schema({
  ID:{type:Number},
  NombreSaga:{type:String},
  NumeroDeTitulos:{type:Number}
  });
  
  const empleadosSchema = new mongoose.Schema({
  id:{type:Number},
  nombre:{type:String},
  apellido:{type:String},
  correo:{type:String},
  telefono:{type:String},
  direccion:{type:String},
  fecha_contratacion:{type: Date, default: Date.now},
  salario:{type:mongoose.Types.Decimal128},
  cargo:{type:String}
  });
  
  const encargosSchema = new mongoose.Schema({
  id:{type:Number},
  id_cliente:{type:Number},
  id_producto:{type:Number},
  cantidad:{type:Number},
  total_venta:{type:mongoose.Types.Decimal128},
  fecha_venta:{type: Date, default: Date.now}
  });
  
  const miembrosSchema = new mongoose.Schema({
  id:{type:Number},
  nombre:{type:String},
  apellido:{type:String},
  correo:{type:String},
  telefono:{type:String},
  direccion:{type:String}
  });
  



let editorials =new mongoose.model('editorials', editorialsSchema);
let generos =new mongoose.model('generos', generosSchema);
let stocks =new mongoose.model('stocks', stocksSchema);
let desarrolladora =new mongoose.model('desarrolladora', editorialsSchema);
let genero =new mongoose.model('genero', generosSchema);
let stock =new mongoose.model('stock', stocksSchema);
let stockconduccion =new mongoose.model('stockconduccion', stockconduccionSchema);
let editorial =new mongoose.model('editorial', editorialSchema);
let sagas =new mongoose.model('sagas', sagasSchema);
let empleados =new mongoose.model('empleados', empleadosSchema);
let encargos =new mongoose.model('encargos', encargosSchema);
let miembros =new mongoose.model('miembros', miembrosSchema);





async function getdata() {
const res = await fetch(API);
const data = await res.json();



try {
 let inserted_a = await editorials.insertMany(data.editorials)
 let inserted_b = await generos.insertMany(data.generos);
 let inserted_c = await stocks.insertMany(data.stocks);
 let inserted_d = await desarrolladora.insertMany(data.desarrolladora);
 let inserted_e = await genero.insertMany(data.genero);
 let inserted_f = await stock.insertMany(data.stock);
 let inserted_g = await stockconduccion.insertMany(data.stockconduccion);
 let inserted_h = await editorial.insertMany(data.editorial);
 let inserted_i = await sagas.insertMany(data.sagas);
 let inserted_j = await empleados.insertMany(data.empleados);
 let inserted_k = await encargos.insertMany(data.encargos);
 let inserted_l = await miembros.insertMany(data.miembros);

 //console.log(inserted_a);
 process.exit(0);
} catch (e) {
 console.log('Some error');
 console.log(e);
 process.exit(0);
}
}


getdata();