const mongoose = require('mongoose')
const jwt=require("jsonwebtoken")
const userSchema = new mongoose.Schema({
    number:
    {
        type:String,
        required:true
    }
}, { timestamps: true })
userSchema.methods.genrateJWT=function(){
    const token=jwt.sign({
        _id:this._id,
        number:this.number
    },"Kishan",{expiresIn:"7d"})
    return token
}

module.exports = mongoose.model('User', userSchema)