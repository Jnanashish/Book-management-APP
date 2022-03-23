const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const expressjwt = require("express-jwt");

exports.signup = (req, res) =>{ 
    const {name, email, password, role} = req.body;
    const user = new User({name, email, password, role})
    user.save((err, user) => {
        if(err){
            return res.status(400).json({
                err: "NOT able to save user in db"
            })
        } 
        const {name, email, role, id} = user;
        res.status(200).json({name, email, role, id});
    })
};


exports.signin = (req, res) =>{   
    const {email, password} = req.body;

    User.findOne({email}, (err, user) =>{
        if(err || !user){
            return res.status(400).json({
                error : "USER email doesnt exist",
            });
        }
        // method from user model to match the passwords
        if(!user.autheticate(password)){
            return res.status(401).json({
                error : "Email and password do not match",
            })
        }

        const token = jwt.sign({_id: user._id}, process.env.SECRET)

        // put token in cookie (Cookie is like a key value pair)
        res.cookie("token", token, {expire : new Date() + 1})

        const {_id, email, name, role} = user;
        return res.json({token, user:{_id, email, name, role}});
    })
}


// function to check if user is signed in or not, check for token
exports.isSignedIn = expressjwt({
    secret : process.env.SECRET,
    // auth will be added in the response
    userProperty : "auth",
    algorithms: ['RS256'] 
})


// custom middleware 
exports.isAuthenticated = (req, res, next) =>{
    // profile is send from frontend, auth set by isauthenticated middleware
    let checker = req.profile && req.auth && req.profile._id == req.auth._id;
    if(!checker){
        return res.status(403).json({
            error : "ACCESS DENIED"
        })
    }
    next();
}


exports.isAdmin = (req, res, next) =>{
    if(req.profile.role === 0){
        return res.status(403).json({
            error : "You are not an admin"
        })
    }
    next();
}