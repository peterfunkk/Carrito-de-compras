const express = require('express');
const router = express.Router();
const {newCart, addProductInCart} = require('../Controllers/CartController')
const {verifyToken} = require('../Helpers/token')
const checkAuth = require('../Middlewares/auth')
const checkRoleAuth = require('../Middlewares/checkRole')
const {getUserId} = require('../Middlewares/getUserId')
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;



router.get('/', (req, res) => {
    res.render('CarritoVista')
})
router.post('/', checkAuth, getUserId, addProductInCart, (req, res) => {

});


module.exports = router;