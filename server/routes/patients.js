var express=require('express')
var mongoose=require('mongoose')
var patientObj=require('../model/patients');
var app=express();
var Validator= require('validator')


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

/*function validateInput(data)
{
 var erros={};

 console.log(data.firstName)

  if(Validator.isNull(data.firstName)){
    errors.firstName="field required";
  }

}*/



app.post('/add',function(req,res){
  
 /* console.log(req.body);
  const errors=validateInput(req.body);
  const isValid=validateInput(req.body);
  if(!isValid){
    res.status(400).json(errors);
  }
  else
  {
 */


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
  //}
});


app.get('/display/:first',function(req,res,next){
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

app.use(loggerTest)
  
module.exports=app;