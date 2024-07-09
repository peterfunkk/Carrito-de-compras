const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

const verifyToken = async (token) => {
    try{
        return jwt.verify(token, JWT_SECRET)
    }catch(e){
        return null
    }
}

module.exports = {verifyToken}