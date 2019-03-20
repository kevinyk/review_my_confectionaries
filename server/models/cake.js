let mongoose = require('mongoose');
let reviewSchema = new mongoose.Schema({
    stars: Number,
    content: String
})
let cakeSchema = new mongoose.Schema({
    name: String,
    imageUrl: String,
    reviews: [reviewSchema]
})

mongoose.model('cakes', cakeSchema);