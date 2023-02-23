//setup server
var routerBook = require('./router/bookRoute');
var routerStore = require('./router/storeRoute');
var bodyParser = require('body-parser');
var express = require('express');
var cors = require('cors');
var app = express();
var port =  3000;


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/',(req,res)=>{
    res.send('Hello World...');
})

app.use('/api/v1',routerBook);
app.use('/api/v1',routerStore);


app.listen(port,()=>{
    console.log('server is running on port: '+port);
})

