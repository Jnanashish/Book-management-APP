var express = require("express");
var router = express.Router();  

const {books, addbook, deletebook, updatecount, updateBookcount} = require("../controllers/books.js")


// add a new book details
router.post("/addbook", addbook);

// get all the book details
router.get("/books", books);

// delete book from database 
router.delete("/deletebook/:id", deletebook);

// update count of copies avaiable
router.patch("/updatecount/:id", updatecount);

// update the book count by admin
router.patch("/updateBookcount/:id", updateBookcount);


module.exports = router;