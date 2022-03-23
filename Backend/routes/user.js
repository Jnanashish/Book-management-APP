var express = require("express");
var router = express.Router();

// import methods from controllers
const { signup, signin, isSignedIn} = require("../controllers/user")


// sign up new user
router.post("/signup", signup);

// sign in new user
router.post("/signin", signin);


module.exports = router;  