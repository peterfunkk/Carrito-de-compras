const {verifyToken} = require('../Helpers/token')
const axios = require('axios');


const checkUser = async (id) =>{ 
    try {
        const response = await axios.get(`http://localhost:4000/usuario/${id}`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error(error)
        return null;
    }
}

const checkRoleAuth = (roles) => async(req, res, next) => {
    try{
        const token = req.cookies.jwt || req.header('Autorization')?.replace('Bearer ', '');
        const tokenData = await verifyToken(token)
        // const userData = await Usuario.findById(tokenData._id)
        const user = checkUser(tokenData._id);

        if(user === null) {
            return res.status(400).json({message: "id mal escrito o no encontrado"})
        }

        if([].concat(roles).includes(tokenData.role)){
            next()
        }else {
            res.status(409)
            res.send({error: 'No tienes permisos'})
        }
    }catch(err) {
        console.error(err)
    }
}

module.exports = {checkRoleAuth};