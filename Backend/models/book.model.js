const mongoose = require("mongoose")
const Schema = mongoose.Schema


const bookdetailsSchema = new Schema({
    bookname: {
        type: String,
        required: true
    },
    author : {
        type: String,
    },
    genre : {
        type: String,
    },
    bookdetails: {
        type: String,
        maxlength: 200,
        trim: true  
    },
    image : {
        type: String,
    },
    noofcopies : {
        type: Number,
        default: 0
    },
    publicationstartyear : {
        type: Date,
    },
    publicationendyear : {
        type: Date,
    }
})


module.exports = mongoose.model("bookdetails", bookdetailsSchema)