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

let desarrolladora =new mongoose.model('desarrolladora', editorialsSchema);
let genero =new mongoose.model('genero', generosSchema);
let stock =new mongoose.model('stock', stocksSchema);



async function getdata() {
const res = await fetch(API);
const data = await res.json();
console.log(data.desarrolladora);
console.log(data.genero);
console.log(data.stock);

try {
 let inserted_a = await desarrolladora.insertMany(data.desarrolladora)
 let inserted_b = await genero.insertMany(data.genero);
 let inserted_c = await stock.insertMany(data.stock);

 //console.log(inserted_a);
 process.exit(0);
} catch (e) {
 console.log('Some error');
 console.log(e);
 process.exit(0);
}
}


getdata();
