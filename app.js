const express = require('express')
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express()
//connect to mongodb
const dbURI = 'mongodb+srv://Saad:1010@cluster0.qumbrdd.mongodb.net/Practice?retryWrites=true&w=majority'
mongoose.connect(dbURI,{useNewUrlParser: true, useUnifiedTopology: true} )
    .then(result=>{app.listen(3000)})
    .catch(err=>{console.log(err)})

// set view engine
app.set('view engine','ejs')
// change name of folder
app.set('views','docs')
// use morgan middleware
app.use(morgan('dev'))
// middleware for public folder
app.use(express.static('public'))
//read data from html form
app.use(express.urlencoded())
//blog routes 
app.use('/blogs',require('./routes/blogRoutes'))

app.get('/',(req,res)=>{
    res.redirect('/blogs')
})
app.get('/about',(req,res)=>{
    res.render('about',{title:'About'})
})
app.get("/about-us",(req,res)=>{
    res.redirect('/about') 
})
app.use((req,res)=>{
    res.status(404).render('404',{title:'404'})
})