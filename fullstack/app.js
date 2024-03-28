// Create server using express
let express = require('express');
let app= express();
// define port number
let port=8600;

///define route here (get , post , put , delete)
// Get-means get or return the data 
// app is object of express
// get is method

// default route
app.get('/', function(req, res){
    // syntex of get or return is
    res.send('Hii form express ')
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

var categories=[
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
      }
]


// Product Route

// Product Route
app.get('/product', function(req, res){
    res.send(product)
});
 
// Categories Route
app.get('/categories', function(req, res){
    res.send(categories);
  });
 

// here categories

app.get("/categories", function(res, req){
  res.send(categories)
})














// here use part 
app.listen(8600, function(err){
    if(err) throw err;
    console.log(`server is running on port ${8600}`)
})