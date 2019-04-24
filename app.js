const express = require('express')
const morgan = require('morgan')
const hbs = require('hbs')
const path = require('path')
const mainRouter = require('./routes/main')
require('./db/mongo')

const publicPath = path.join(__dirname,'/public')
const viewsPath = path.join(__dirname,'/views')
const app = express()

app.use(morgan('combined'))
app.set("view engine", "hbs")
app.set('views'), viewsPath
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static(publicPath))
app.use(mainRouter)

//TODO Найти картинку 404
//TODO make a bad route
app.use((req, res) => {
    res.status(404).send("Not Found")
});


module.exports = app