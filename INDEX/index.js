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

let editorials =new mongoose.model('editorials', editorialsSchema);
let generos =new mongoose.model('generos', generosSchema);
let stocks =new mongoose.model('stocks', stocksSchema);



async function getdata() {
const res = await fetch(API);
const data = await res.json();
console.log(data.editorials);
console.log(data.generos);
console.log(data.stocks);

console.log(editorials);
try {
 let inserted_a = await editorials.insertMany(data.editorials)
 let inserted_b = await generos.insertMany(data.generos);
 let inserted_c = await stocks.insertMany(data.stocks);

 //console.log(inserted_a);
 process.exit(0);
} catch (e) {
 console.log('Some error');
 console.log(e);
 process.exit(0);
}
}


getdata();