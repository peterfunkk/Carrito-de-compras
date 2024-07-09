const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Cart = new mongoose.Schema({
    products: [{
        product: {type: Schema.Types.ObjectId, ref: 'Productos'},
        quantity: {type: Number, default: 1}
    }],
    userId: {type: Schema.Types.ObjectId, ref: 'Usuarios'}
})

module.exports = mongoose.model('Cart', Cart)