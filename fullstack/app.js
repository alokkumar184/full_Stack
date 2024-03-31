// Create server using express
let express = require('express');
let app= express();

// here add one Line of env file
let dotenv=require('dotenv')
dotenv.config()
// define port number
let port=process.env.PORT || 7230;

/// Morgan
let morgan=require('morgan')

// here use the fs fro save the logs file
let fs=require('fs');
// helmet use for secure the app ( search and Read)
let helmet=require('helmet')

//use
app.use(helmet())
//Middleware
app.use(morgan('short',{Stream:fs.createWriteStream('./app.logs')}))
// here import
let productRouter=require('./src/Router/ProductRoute')
let categoriesRouter=require('./src/Router/categoriesRoute');
const { Stream } = require('stream');



// here static file path for view Html
app.use(express.static((__dirname, 'public')));
// Html file path 
app.set('views', './src/views');
//view engine name
app.set('view engine', 'ejs');

///define route here (get , post , put , delete)
// Get-means get or return the data 
// app is object of express
// get is method

// default route
app.get('/', function(req, res){
    // syntex of get or return is
    // res.send('<h1>Hii form express </h1>')

    // here render the index .ejs file
    res.render('index',{title:'Home Page '})  // we are passing the the title variable to the index.ejs file

})

// Route
app.get('/home', function(req, res){
    res.send(" This is home Page")
})

// Restaurants Route
app.get('/restaurants', function(req, res){
    res.send("Wel come to Restaurants")
})

/// Create the api with route using static data

var product=[
    {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "...",
        "images": ["...", "...", "..."]
      },
]
// categories



app.use('/categories',categoriesRouter )
app.use('/products', productRouter)
// here categories
app.get("/categories", function(res, req){
  res.send(categories)
})




// here use part 
app.listen(port, function(err){
    if(err) throw err;
    console.log(`server is running on port ${8600}`)
})