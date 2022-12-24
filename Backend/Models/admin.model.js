const mongoose = require("mongoose")

const adminSchema = mongoose.Schema({
    adminID:{type:String, required:true},
    password:{type:String, required:true},
})

const AdminModel = mongoose.model("admin",adminSchema)
module.exports = {AdminModel}