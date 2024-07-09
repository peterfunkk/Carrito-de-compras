const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

const {verifyToken} = require('../Helpers/token')


const getUserId = async (req, res, next) => {
    const token = req.cookies.jwt;
    const payload = await verifyToken(token)
    const role = payload._id;
    console.log(role)
    req.user = payload._id;
    next()
}

module.exports = {getUserId};