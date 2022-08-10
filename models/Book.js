import mongoose from 'mongoose';

/**
 * 1.- Esquema (Schema)
 * 2.- Nombre del modelo
 */

const schema = new mongoose.Schema({
  title: String,
  name: String,
  author: String,
  edition: String,
  pages: Number,
  isbn: String,
  publishDate: Date,
});

export default mongoose.model('Book', schema);
