const mongoose = require('mongoose')

//creating the schema
const signupSchema = mongoose.Schema({
 username:{
     type:String,
     required:true
 },

 email:{
     type:String,
     required:true,
     unique: true
 },

password:{
    type:String,
    required:true,
}
})

// we are exposing our schema to other files
module.exports = mongoose.model('Signup', signupSchema);