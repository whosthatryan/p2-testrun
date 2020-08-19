require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000; 
const methodOverride = require('method-override');

const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

db.on( 'open' , ()=>{
    console.log('Connection made!');
  });

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));

// const staticController = require('./controllers/home.js');
// app.use('/', staticController);

// const logsController = require('./controllers/logs.js');
// app.use('/logs', logsController);

// const crewController = require('./controllers/crewmembers.js');
// app.use('/crewmembers', crewController);

app.listen(PORT, ()=>{
    console.log('listening');
});