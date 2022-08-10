import mongoose from 'mongoose';
import Book from './models/Book.js';

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

mongoose.connect('mongodb://localhost:27017/test', () => {
  console.log('Callback de función connect');
  /**
   * TODO:
   *    1.- Crear un libro
   *    2.- Actualizar libro
   *    3.- Leer libro(consultar)
   *    4.- Eliminar
   */
  Book.create({
    author: 'Isaac',
    title: 'Como programar en 1 día',
    edition: '2022 g13',
    isbn: '01823718023u1',
    pages: 10,
    publishDate: new Date(),
  });
});
