var express=require('express')
var mongoose=require('mongoose')
var patientObj=require('../model/patients');
var app=express();



app.post('/add',function(req,res){
   
  var pattern = /^([0-9]{4})\/([0-1]{1}[0-9]{1})\/([0-9]{2})$/ ;
  var mobilechek=/^\d{10}$/;
    
  var k=true;

  var data=req.body;

  var today = new Date();
  var birthDate = new Date(data.dob);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
  {
    age--;
  }
  if(data.firstName==null || data.firstName=="")
  {
    console.log("First Name cannot be empty.")
    k=false;
  }
  if(data.lastName==null ||  data.lastName==" ")
      {
    console.log("Last Name cannot be empty.")
    k=false;
  }
  if(data.age==null || data.age=="")
  {
    k=false;
    console.log("Age cannot be empty.")
  }
  if(data.mobile==null || data.mobile=="")
  {
    k=false;
    console.log("Mobile Number cannot be empty.")
  }
  if(data.details==null || data.details==" ")
  {
    k=false;
    console.log("Details cannot be empty.")
  }
  if(data.gender!="Male" && data.gender!="Female" && data.gender!="Others")
  {
    k=false;
    console.log("Gender cannot be empty.")
  }
  if(isNaN(data.age) || data.age<1  || data.age >100)
  {
    k=false;
    console.log("Age should be a number between 1 to 100")
  }
  if (data.dob == null || data.dob == "" || !pattern.test(data.dob))
  {
    k=false;
  console.log("Please input Date in YYYY/MM/DD format");
  }
  else if(age<0)
  {
    k=false;
    console.log("Future Date Cannot be Inserted.");
  }
  else if(age!=data.age)
  {
    k=false;
    console.log("Age and DOB Field do not match.Please enter correct values.");
  }
  if(!mobilechek.test(data.mobile))
  {
    k=false;
    console.log("Mobile Number should have 10 digits");
  }

  if(k==true)
  {
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

  }
});


app.get('/display/:first',function(req,res){
   
  
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