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

let stockconduccion =new mongoose.model('stockconduccion', stockconduccionSchema);
let editorial =new mongoose.model('editorial', editorialSchema);
let sagas =new mongoose.model('sagas', sagasSchema);



async function getdata() {
const res = await fetch(API);
const data = await res.json();
console.log(data.stockconduccion);
console.log(data.editorial);
console.log(data.sagas);

try {
 let inserted_a = await stockconduccion.insertMany(data.stockconduccion)
 let inserted_b = await editorial.insertMany(data.editorial);
 let inserted_c = await sagas.insertMany(data.sagas);

 //console.log(inserted_a);
 process.exit(0);
} catch (e) {
 console.log('Some error');
 console.log(e);
 process.exit(0);
}
}


getdata();