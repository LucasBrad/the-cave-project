const bodyParser = require('body-parser');
const express = require('express');
const {default: knex} = require('knex');
const {reset} = require('nodemon');
const app = express()

const PORT = process.env.PORT || 3001;

// app.use(bp.urlencoded({ extended: false}))
// app.use(bp.json())

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req,res)=>{
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/contact_us',(req,res)=>{
    res.render('contact_us')
}) 

app.get('/comparison',(req,res)=>{
    res.render('comparison')
})

app.get('/requirements',(req,res)=>{
    res.render('requirements')
})
app.listen(PORT, ()=>console.log(`Server is listening on port ${PORT}`));