const db_uri = 'mongodb://127.0.0.1:27017/Carrito';
const mongoose = require('mongoose');

async function connectDB() {
    try{
        await mongoose.connect(db_uri);
        console.log('conectado a mongo')
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB;