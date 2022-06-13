require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const path = require('path')


const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())


// import Routes
app.use('/ecom', require('./routes/Product'))



// Connect to mongodb
const URI = process.env.MONGODB_URL
mongoose.connect(URI, {   
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err =>{
    if(err) throw err;
    console.log('Connected to MongoDB')
})


const PORT = process.env.PORT || 8089
app.listen(PORT, () =>{
    console.log('Server is running on port', PORT)
})
