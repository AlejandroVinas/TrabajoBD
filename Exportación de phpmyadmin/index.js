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
  

let empleados =new mongoose.model('empleados', empleadosSchema);
let encargos =new mongoose.model('encargos', encargosSchema);
let miembros =new mongoose.model('miembros', miembrosSchema);





async function getdata() {
const res = await fetch(API);
const data = await res.json();



try {

 let inserted_a = await empleados.insertMany(data.empleados);
 let inserted_b = await encargos.insertMany(data.encargos);
 let inserted_c = await miembros.insertMany(data.miembros);

 //console.log(inserted_a);
 process.exit(0);
} catch (e) {
 console.log('Some error');
 console.log(e);
 process.exit(0);
}
}


getdata();
