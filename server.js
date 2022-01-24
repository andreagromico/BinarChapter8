const express = require('express')
const expressLayout = require('express-ejs-layouts')
const app = express()
const { PORT = 3000 } = process.env

// View Engine
app.use(express.static('public')), 
app.set('view engine', 'ejs')
app.set(expressLayout)
app.set('layout', 'layouts/default')

// Parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Middlewares, pasang sebelum routing
const setDefault = (req, res, next) => {
    res.locals.contentName = "Default"
    //silahkan tambahkan default variabel lain, bila diperlukan
    next()
}

// Taruh code ini setelah setup view engine dan parser
const router = require('./router')
app.use(router)

app.listen(PORT, () =>{
    console.log('Listening on http://localhost:${PORT}')
})