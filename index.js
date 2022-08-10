import mongoose from 'mongoose';

const db = mongoose.connection;

db.on('connected', () => {
  console.log('Se ha conectado a la base de datos 🟢');
});

db.on('connecting', () => {
  console.info('Intentando conectar a la base de datos demongo 🟡');
});

db.on('disconnected', () => {
  console.log('Se ha desconectado la base de datos 🟨');
});

db.on('error', () => {
  console.error('Ha ocurrido un error en la conexión 🔴');
});

mongoose.connect('mongodb://localhost:27017/test');
