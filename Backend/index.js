const mongoose = require("mongoose")
const express = require("express")
require("dotenv").config()
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser");

// import routes
const userRoutes = require("./routes/user")
const bookRoutes = require("./routes/books")


// db connections
mongoose.connect(process.env.DATABASE,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true ,
}).then(()=>{
    console.log("DB CONNECTED");
}).catch((err)=>{
    console.log("Cannot connect to DB");
})


// middlewares
app.use(cors())
app.use(bodyParser.json())
// app.use(express.json())

// routes
app.use("/api", userRoutes)
app.use("/api", bookRoutes)


// port
const port = process.env.port || 8000;

app.listen(port, ()=>{
    console.log(`App is running at port ${port}`);
})