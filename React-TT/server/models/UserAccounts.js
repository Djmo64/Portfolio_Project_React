const mongoose = require('mongoose');






//schema
const Schema = mongoose.Schema;
const UserAccountSchema = new Schema({
    username: String,
    password: String ,
    date:{
        type:String,
        default: Date.now()
    }
});





//model
const UserAccount = mongoose.model('UserAccount',UserAccountSchema)

module.exports = UserAccount;


