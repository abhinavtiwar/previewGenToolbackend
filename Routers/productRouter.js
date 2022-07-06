const express = require("express");
const router=express.Router();
const Model=require("../models/productModel");

router.post('/add',(req,res) =>{
    const formdata=req.body;
     console.log(req.body);
   
    //create operation of crud
    new Model(formdata).save()
    .then((result) => {//shortcut used is thenc
        console.log("data sucessfully saved");
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.json(err);
    });
}); 

module.exports=router;