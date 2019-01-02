var express = require('express'),
    mongoose =require('mongoose'),
    bodyParser = require('body-parser');

    var db =mongoose.connect('mongodb://localhost:27017/bookAPI');
    var Book = require('./modules/bookModel');

var app=express();
var port = process.env.port || 8000;

// app.use(bodyParser.json);
 //app.use(bodyParser.urlencoded({extended:true}));

var bookRouter = express.Router();
bookRouter.route('/Books')
    .get(function(req,res){
        // Book.find(query,function(error,books){
        //     if(error){
        //         res.status(500).send(error)
        //     }else {
        //         res.json(books);
        //     }
        // })
        // res.json(responseJson);
        console.log(Book);
    })
app.use('/api',bookRouter);

app.get('/',function(req,res){
    res.send('Welcome to my API');
});

app.listen(port, function(){
    console.log("Running on PORT:" + port);
});