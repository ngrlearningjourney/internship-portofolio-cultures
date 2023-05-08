const express = require('express')
const session = require('express-session')
const app = express()
app.set('view engine','ejs')
app.use(express.static("./public"))
app.use(session({
    secret: "secretinfohere",
    resave:false,
    saveUninitialized : false
}))

app.get('/',(req, res) => {
    res.render('home-page', {style : 'home-style'})
})

app.get('/artist-page',(req, res) => {
    res.render('artist-page',{style : 'artist-style'})
})

app.get('/about-us-page',(req, res) => {
    res.render('about-us-page',{style : 'about-us-style'})
})

app.get('/contact-us-page',(req, res) => {
    req.session.navbarstyle = "activated"
    res.render('contact-us-page', {style : 'contact-us-style'})
})

app.get('/location-page',(req, res) => {
    res.render('location-page', {style : 'location-style'})
})

app.listen(3000)