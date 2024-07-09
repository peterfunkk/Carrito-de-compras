const Cart = require('../Models/Cart')
const {verifyToken} = require('../Helpers/token')

// const addProductInCart = async (req, res) => {
//     const {cartId, productoId, cantidad} = req.body;

//     const productoFind = await Cart.findById(productoId);
//     if(!productoFind){
//         res.status(404).json({message: "product not found"})
//     }

//     try{
//         Cart.productos.push({userId: usuarioId, product: productoFind._id, cantidad: cantidad})
//     }catch(err){
//     }
// }

const addProductInCart = async (req, res) => {
    const {productoId, cantidad} = req.body;
    const userId = req.user;
    console.log(userId)
    const findCart = Cart.userId.findById(userId);


    if(findCart){
        findCart.products.push({product: productoId, quantity: 1})
    } else if (findCart === null) {
        const newCart = new Cart ({
            products:[{
                product: productoId,
                quantity: cantidad
            }],
            userId: userId,
        })
        newCart.save()
    }

 }


module.exports = {addProductInCart}