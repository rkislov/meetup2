const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/meetup',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
})