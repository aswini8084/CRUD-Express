// module
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require ('path')

// import files
const frontRoutes = require('./routes/front.route');

// app instance
const app = express();

// view engine
app.set('view engine', 'hbs');

// middleware
app.use(bodyParser.urlencoded({extended: true}));

// static files
app.use(express.static(path.join(__dirname, 'public')))

// routes
app.use(frontRoutes);


// database connect
mongoose
    .connect("mongodb://127.0.0.1:27017/wd11amcrud")
    .then(function(){
        console.log("database connected");
    })
    .catch(function(err){
        console.log(err.message);
    })


app.listen(3000, function(){
    console.log("server is listening");
})