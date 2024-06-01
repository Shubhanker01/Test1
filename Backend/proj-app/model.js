const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    name:String,
    email:String,
    city:String,
    message:String
})

module.exports = mongoose.model('admin',userSchema)