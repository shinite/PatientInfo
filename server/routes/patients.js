var express=require('express')
var mongoose=require('mongoose')
var patientObj=require('../model/patients');
var app=express();
var Validator= require('validator')



app.post('/add',function(req,res){


  var patients =new patientObj(req.body);
  patients.save(function(err)
  {
    if(err)
      {

      res.send(err);
    }
    else
    {
      console.log("successful post")
     //res.send("add")
     //next();
    }
  })
  //}
});


app.get('/display/:first',function(req,res){
   console.log(req.body);
  
   patientObj.find({firstName:req.params.first},function(err,data){

    if(err){
      res.send("error in get");
    }
    else {
      console.log("successfully displayed");
      res.json(data);
    }
  })
  
}
);

  
module.exports=app;