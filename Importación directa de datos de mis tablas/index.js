import mongoose from 'mongoose';

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/tienda_videojuegos', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Definir el esquema para la colección 'empleados'
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
// Colocar el índice de id
empleadosSchema.index({ id: 1 }, { unique: true });

// Definir el esquema para la colección 'encargos'
const encargosSchema = new mongoose.Schema({
    id:{type:Number},
    id_cliente:{type:Number},
    id_producto:{type:Number},
    cantidad:{type:Number},
    total_venta:{type:mongoose.Types.Decimal128},
    fecha_venta:{type: Date, default: Date.now}
    });
// Colocar el índice de id
encargosSchema.index({ id: 1 }, { unique: true });

// Definir el esquema para la colección 'miembros'
const miembrosSchema = new mongoose.Schema({
    id:{type:Number},
    nombre:{type:String},
    apellido:{type:String},
    correo:{type:String},
    telefono:{type:String},
    direccion:{type:String}
    });
// Colocar el índice de id
miembrosSchema.index({ id: 1 }, { unique: true });

// Modelo para la colección 'empleados'
const empleados = mongoose.model('empleados', empleadosSchema);
// Modelo para la colección 'encargos'
const encargos = mongoose.model('encargos', encargosSchema);
// Modelo para la colección 'miembros'
const miembros = mongoose.model('miembros', miembrosSchema);
// Datos de la tabla 'empleados'
const datosEmpleados = [
    { id: 1, nombre: 'Carlos', apellido: 'Gonzalez', correo: 'carlos@gmail.com', telefono: '124-226-333', direccion: 'Av. Libertador 123', fecha_contratacion: new Date('2023-01-15'), salario: 2500.00, cargo: 'Gerente' },
    { id: 2, nombre: 'Ana', apellido: 'Lopez', correo: 'ana@hotmail.com', telefono: '192-273-945', direccion: 'Calle 456', fecha_contratacion: new Date('2023-02-20'), salario: 1800.00, cargo: 'Vendedor'},
    { id: 3, nombre: 'Pedro', apellido: 'Rodriguez', correo: 'pedro@gmail.com', telefono: '123-594-190', direccion: 'Av. Bolivar 789', fecha_contratacion: new Date('2023-03-20'), salario: 2000.00, cargo: 'Cajero'},
    { id: 4, nombre: 'Ramiro', apellido: 'Gutierrez', correo: 'RamirG@hotmail.com', telefono: '102-591-145', direccion: 'Av. Camargo 234', fecha_contratacion: new Date('2023-05-20'), salario: 2000.00, cargo: 'Almacén'}
];
// Datos de la tabla 'encargos'
const datosEncargos = [
    { id: 5, id_cliente: 1, id_producto: 1, cantidad: 2, total_venta: 119.98, fecha_venta: new Date('2023-04-01 10:30:00') },
    { id: 6, id_cliente: 2, id_producto: 2, cantidad: 1, total_venta: 49.94, fecha_venta: new Date('2023-05-15 14:45:00') },
    { id: 7, id_cliente: 3, id_producto: 3, cantidad: 3, total_venta: 209.97, fecha_venta: new Date('2023-06-20 16:20:00') },
    { id: 8, id_cliente: 1, id_producto: 2, cantidad: 1, total_venta: 49.99, fecha_venta: new Date('2023-07-10 09:00:00') }
];
// Datos de la tabla 'miembros'
const datosMiembros = [
    { id: 1, nombre: 'Juan', apellido: 'Perez', correo: 'juan12@gmail.com', telefono: '123-456-789', direccion: 'Calle 123, Ciudad'},
    { id: 2, nombre: 'Maria', apellido: 'Gomez', correo: 'maria@hotmail.com', telefono: '456-789-023', direccion: 'Av Principal, Pueblo'},
    { id: 3, nombre: 'Luis', apellido: 'Martinez', correo: 'luis@gmail.com', telefono: '789-012-346', direccion: 'Apartado Postal 456, Villa'},
    { id: 4, nombre: 'Sergio', apellido: 'Torres', correo: 'SergioT@gmail.com', telefono: '259-101-023', direccion: 'Calle 123, Ciudad'},
];
// Insertar datos en la colección 'empleados' de MongoDB
db.once('open', async () => {
    try {
        // Eliminar todos los documentos existentes en la colección 'empleados'
        await empleados.deleteMany({});
        // Eliminar todos los documentos existentes en la colección 'encargos'
        await encargos.deleteMany({});
        // Eliminar todos los documentos existentes en la colección 'miembros'
        await miembros.deleteMany({});
        // Insertar los datos de ejemplo en la colección 'empleados'
        await empleados.insertMany(datosEmpleados);
        // Insertar los datos de ejemplo en la colección 'encargos'
        await encargos.insertMany(datosEncargos);
        // Insertar los datos de ejemplo en la colección 'miembros'
        await miembros.insertMany(datosMiembros)
        console.log('Datos insertados correctamente en la colección "empleados" de MongoDB.');
        // Cierra la conexión a la base de datos después de insertar los datos
        mongoose.connection.close();
    } catch (error) {
        console.error('Error al insertar datos:', error);
    }
});
