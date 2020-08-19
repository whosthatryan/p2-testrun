const express = require('express');
const app = express();
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000; 
const methodOverride = require('method-override');

const mongoURI = "mongodb+srv://RyanM:thisismypasswordlol@cluster0.3ilz8.azure.mongodb.net/p2-testrun?retryWrites=true&w=majority";
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

app.listen(PORT, ()=>{
    console.log('listening');
});