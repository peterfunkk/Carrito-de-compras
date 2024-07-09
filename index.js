const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const connectDB = require('./db/db')
const app = express();
const port = 3000;



const CartRouter = require('./Routes/CartRouter')


connectDB()

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(express.static('Public'));
app.use(express.json())
app.use(cookieParser());



app.use('/cart', CartRouter)

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Credentials', true); // Permitir el envío de cookies en las solicitudes CORS
    next();
});

app.listen(port, ()=> {
    console.log(`server listen on port ${port}`)
})