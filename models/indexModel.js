const mongoose = require('mongoose');

//creating the schema
const indexSchema = mongoose.Schema({

 firstname: {
    type:String,
    required:true
 },
 
 lastname:{
     type:String,
     required:true
 },

 email:{
     type:String,
     required:true,
 },

 tel:{
    type:String,
    required:true,
 },

 address:{
    type:String,
    required:true,
 },

 cohort:{
    type:String,
    required:true,
 }
});

module.exports = mongoose.model('Index', indexSchema);