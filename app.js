const express = require('express')
const morgan = require('morgan')
const path = require('path')
const mainRouter = require('./routes/main')

const publicPath = path.join(__dirname,'/public')
const viewsPath = path.join(__dirname,'/views')
const app = express()

app.use(morgan('combined'))
app.set("view engine", "hbs")
app.set('views'), viewsPath
app.use(express.static(publicPath))
app.use(mainRouter)


module.exports = app