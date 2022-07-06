const {Schema , model} = require("../connection");

const schema=new Schema({
    firstName:String,
    lastName:String,
    job:String,
    email:String,
    address:String,
    phonenumber:Number,
    gender:String,
   

})

module.exports=model("products",schema);