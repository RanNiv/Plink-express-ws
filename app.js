const express = require('express');
const bodyParser = require('body-parser');

const order = require('./routes/order.route'); // Imports routes for the products
const app = express();
const cors = require('cors');
app.use(cors());

app.options('*', cors()) 

/* const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
  } */

/* const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
  }  */



// Set up mongoose connection
const mongoose = require('mongoose');

//mongodb+srv://dbuser9897:<password>@testcluster-9yzrc.mongodb.net/test?retryWrites=true
//let dev_db_url = 'mongodb://someuser:abcd1234@ds123619.mlab.com:23619/productstutorial';
let dev_db_url = 'mongodb+srv://dbuser9897:152147ty89op@testcluster-9yzrc.mongodb.net/PlinkDb?retryWrites=true';

const mongoDB = process.env.MONGODB_URI || dev_db_url;
//mongoose.connect(mongoDB);
mongoose.connect(mongoDB,{useNewUrlParser: true});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use('/products', product);
app.use('/order', order);

let port = process.env.PORT || 1234;



app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});