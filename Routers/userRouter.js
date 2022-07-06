const express = require("express");
const router=express.Router();
const Model=require("../models/userModel");

router.post('/add',(req,res) =>{
    const formdata=req.body;
     console.log(req.body);//used to get the data in post
   // res.send("request processed in user router");
   
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
    //to fetch all the users data
    router.get('/getall',(req,res)=>{
        Model.find({})
        .then((result) => {
            console.log("user data fetched");
            res.json(result); 
        })
        .catch((err) => {
            console.error(err); 
            res.json(err);   
        });
    })
    
router.delete("/delete/:id", (req, res) => {
    Model.findByIdAndDelete(req.params.id)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.error(err); 
        res.json(err);
      });
  }); 

router.get('/getbyid/:id',(req,res) =>{
console.log(req.params.id);//used to get the data of id
res.send("Response by getbyid by passing id");
    

})

// for login page
router.post( '/authenticate', (req, res) => {

  const formdata = req.body;
//findone is used to find first entry 
  Model.findOne({email : formdata.email, password : formdata.password})
  .then((userdata) => {
    if(userdata){
      console.log('login success');
      res.status(200).json(userdata);
    }else{
      console.log('login failed');
      res.status(300).json({loginStatus : false})
    }
  }).catch((err) => {
    console.error(err);
    res.json(err);
  });
})

router.put('/update/:id', (req, res) => {
  const formdata = req.body;

  // to find the entry by id and update with formdata
  Model.findByIdAndUpdate(req.params.id, formdata)
  .then((result) => {
    res.json(result);  
  }).catch((err) => {
    console.error(err);
    res.json(err);
  });
})
module.exports=router;