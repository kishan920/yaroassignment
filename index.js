const express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose')
const route = require('./Routers/route.js');
const multer=require("multer")
const app = express();
const port =process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any())

app.use('/', route);

mongoose.connect("mongodb+srv://user-open-to-all:hiPassword123@cluster0.xgk0k.mongodb.net/Kishan-database?authSource=admin&replicaSet=atlas-e7145j-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true", { useNewUrlParser: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err))

app.listen(port, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});