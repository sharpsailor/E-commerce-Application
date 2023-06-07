const mongoose = require('mongoose');


const reviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        min: 0,
        max:5
    },
    comment: {
        type: String,
        trim:true
    },
    author: {
        type: String,
        
    }
},{timestamps:true});


module.exports = mongoose.model("Review", reviewSchema);