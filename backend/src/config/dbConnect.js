import mongoose from "mongoose";

// Coneção com o banco de dados
mongoose.connect(
  "mongodb+srv://brcls:12345@cluster0.2399to3.mongodb.net/?retryWrites=true&w=majority"
);

let db = mongoose.connection;

export default db;
