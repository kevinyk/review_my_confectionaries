let mongoose = require('mongoose');
let reviewSchema = new mongoose.Schema({
    stars: Number,
    content: String
})