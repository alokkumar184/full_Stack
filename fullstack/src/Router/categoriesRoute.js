// categories Router
let express = require('express');
let categoriesRouter=express.Router();
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

// default route for category
categoriesRouter.route('/')
                .get(function (req, res) {
                    // res.send(categories)
                         // here i want to send the data 
                    res.render('categories', {title:'Category Page', data: categories})
                })
// details route for category

categoriesRouter.route('details')
               .get( function (req, res){
                res.send(" Category Details")
               })


// Export this file for import in app.js
module.exports = categoriesRouter