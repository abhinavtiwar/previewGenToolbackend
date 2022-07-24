const express = require("express");
const multer = require("multer");
const router=express.Router();

app.post("/image", (req, res) => {
    upload(req, res, (err) => {
     if(err) {
       res.status(400).send("Something went wrong!");
     }
     res.send(req.file);
   });
 });


 var storage = multer.diskStorage({   
    destination: function(req, file, cb) { 
       cb(null, './uploads');    
    }, 
    filename: function (req, file, cb) { 
       cb(null , file.originalname);   
    }
 });
 var upload = multer({ storage: storage,limits : {fileSize : 1000000} }).single("file");









module.exports=router;




