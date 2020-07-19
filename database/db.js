
const mongoose = require('mongoose');
let url = 'mongodb://localhost:27017/heyHey';
const connect = mongoose.connect(url, { useNewUrlParser: true }); 


    let Schema = mongoose.Schema;

let FirstScheme = new Schema({
 
   name: { type: String, require: true,minlength:5,maxlength:50},
     email: { type: String, require: true,minlength:5,maxlength:255,unique:true },
    password: { type: String, require: true, minlength:5,maxlength:1024},
    isAdmin:{type:Boolean,default:false}, 
    ppImage: { type: String, required: true ,default:"hi"},
    since: { type: Date, require: true }
    
})
let User = mongoose.model('user', FirstScheme);
module.exports = {
    User,
    
   }
    