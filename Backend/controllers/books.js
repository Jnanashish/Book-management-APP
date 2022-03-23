const Book = require("../models/book.model")

// get all the available books
exports.books = (req, res) => {
    Book.find()
    .exec((err, result) => {
        if(err){
            return res.status(500).json({
                error : err.message
            })           
        }
        return res.status(200).send(result);
   })    
}


// add new book data to database
exports.addbook = (req, res) =>{
    console.log(req.body);
    const {bookname, author, genre, bookdetails, image, noofcopies, publicationstartyear, publicationendyear} = req.body;
console.log(bookname);
    const data = new Book({bookname, author, genre, bookdetails, image, noofcopies, publicationstartyear, publicationendyear})
    data.save((err, result) => {
        if(err){
            return res.status(500).json({
                error : err
            })            
        }       
        return res.status(201).json({
            message : "Data added successfully"
        })         
    })
}


// delete book data from database based on id
exports.deletebook = (req, res) =>{
    Book.deleteOne({_id: req.params.id})
    .exec((err, result) => {
        if(err){
            return res.status(500).json({
                error : "Cannot Delete data"
            })           
        }
        return res.status(200).json({
            message: "Deleted Successfully"
        })
   })
}


// decrement the noofcopies of the book
exports.updatecount = (req, res) => {
    Book.findByIdAndUpdate({ _id: req.params.id},{
        $inc: {"noofcopies": -1}          
    }, {
        new: true
    }).exec((err, result) => {
        if(err){
            return res.status(500).json({
                error : err.message
            })           
        }
        return res.status(200).send(result);
    })    
}


// update the noofcopies of the book by admin
exports.updateBookcount = (req, res) => {
    const {count} = req.body;
    Book.findByIdAndUpdate({ _id: req.params.id},{
        $inc: {"noofcopies": count}          
    }, {
        new: true
    }).exec((err, result) => {
        if(err){
            return res.status(500).json({
                error : err.message
            })           
        }
        return res.status(200).send(result);
    })    
}