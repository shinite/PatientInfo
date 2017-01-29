var express=require('express')
var mongoose=require('mongoose')
var patientObj=require('../model/patients');
var app=express();


var loggerTest=function(req,res,next){  
  patientObj.find(function(err,data){
    if(err)
    res.send(err);
    else
    {
      console.log("successfull middleware");
      console.log(data);
      res.send(data);
    }
  });
}



app.post('/add',function(req,res){
  console.log("Inside Add");
  var patients =new patientObj(req.body);
  patients.save(function(err)
  {
    if(err)
      {
      res.send(err);
    }
    else
    {
      console.log("success")
     //res.send("add")
     //next();
    }
  })
});


app.get('/display/:first',function(req,res,next){
  //console.log("inside get");
  //var movie=mongoose.model("MovieDetails")
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

app.use(loggerTest)
  
module.exports=app;