let express = require('express');
let productRouter=express.Router();






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

productRouter.route('/')
          .get(function(req, res){
            res.send(" Product route default")
          })

          productRouter.route('/details')
          .get(function(req, res){
            res.send(product)
          })

// here Export the file
module.exports = productRouter