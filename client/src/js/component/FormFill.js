var React= require('react');
var ReactDOM=require('react-dom');

var FormFill=React.createClass({

	getInitialState: function() {
    return (
      {
        data: {fisrtName:" ",lastName:" ",age:" ",dob:" ",gender:" ", mobile:" ", details:" "},
      })
	},

	changeFirstName: function(e){
      this.state.data.firstName=e.target.value.toLowerCase();

    },
    changeLastName: function(e){
      this.state.data.lastName=e.target.value.toLowerCase();
    },
    changeAge: function(e){
      this.state.data.age=e.target.value;
    },
    changeDOB: function(e){
      this.state.data.dob=e.target.value;
    },
    changeGender: function(e){
      this.state.data.gender=e.target.value;
    },

    changeNumber: function(e){
      this.state.data.mobile=e.target.value;
    },

    changeDetails: function(e){
      this.state.data.details=e.target.value;
    },  

 	sendtoSubmit: function(e){

 		var pattern = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
 		var mobilechek=/^\d{10}$/;
  		console.log(this.state.data.gender)
  		var k=true;

 		if(this.state.data.firstName==null || this.state.data.firstName=="")
 		{

      	 document.getElementById("FirstName").innerHTML="*Please enter your First Name";
      	 document.getElementById("FirstName").style.display = "block";
      	 k=false;
      	}
      	else
      	{
      		document.getElementById("FirstName").style.display = "none";
      	}

        if(this.state.data.lastName==null || this.state.data.lastName=="")
        {
      	document.getElementById("LastName").innerHTML="*Please enter your Last Name";
      	 document.getElementById("LastName").style.display = "block";
      	k=false;
      	}
      	else
      	{
      		document.getElementById("LastName").style.display = "none";
      	}

        if(this.state.data.age==null || this.state.data.age=="")
        {
        document.getElementById("age").innerHTML="*Please enter your Age";
      	document.getElementById("age").style.display = "block";
      	k=false;
        }
        else
      	{
      		document.getElementById("age").style.display = "none";
      	}

       	if(isNaN(this.state.data.age) || this.state.data.age<1  || this.state.data.age >100)
       	{
       	document.getElementById("age").innerHTML="*Age should be a number between 1 to 100";
      	document.getElementById("age").style.display = "block";
      	k=false;
       	}	
       	else
      	{
      		document.getElementById("age").style.display = "none";
      	}    

    	if (this.state.data.dob == null || this.state.data.dob == "" || !pattern.test(this.state.data.dob))
    	{
    	document.getElementById("dob").innerHTML="*Please input Date in DD/MM/YYYY format";
      	document.getElementById("dob").style.display = "block";
      	k=false;
    	}
    	else
      	{
      		document.getElementById("dob").style.display = "none";
      	}  
    	if(this.state.data.gender!="Male" && this.state.data.gender!="Female" && this.state.data.gender!="Others")
    	{
    	document.getElementById("gender").innerHTML="*Please enter Gender";
      	document.getElementById("gender").style.display = "block";
      	k=false;
    	}
    	else
      	{
      		document.getElementById("gender").style.display = "none";
      	}  	
      	if(this.state.data.details==null || this.state.data.details=="")
      	{
      	document.getElementById("details").innerHTML="*Please  enter details regarding illness";
      	document.getElementById("details").style.display = "block";
      	k=false;
    	}
    	else
      	{
      		document.getElementById("details").style.display = "none";
      	}  
     	if(this.state.data.mobile==null || this.state.data.mobile=="")
      	{
      	document.getElementById("mobile").innerHTML="*Please enter your mobile Number";
      	document.getElementById("mobile").style.display = "block";
      	k=false;
    	}
    	else
      	{
      		document.getElementById("mobile").style.display = "none";
      	}  
      	if(!mobilechek.test(this.state.data.mobile))
      	{
      	document.getElementById("mobile").innerHTML="*Mobile Number should have 10 digits";
      	document.getElementById("mobile").style.display = "block";
      	k=false;
    	}
    	else
      	{
      		document.getElementById("mobile").style.display = "none";
      	}  
	   

	   if(k==true)
	    {
	      this.props.submitData(this.state.data,"done")
	  	}		
    },
	
	render : function(){
		return (
	      <div>

	      	<heading>Patient Information</heading>
		    <form className="form-horizontal" id="Form">

	        <div className="form-group" >
	        <label className="col-lg-4  control-label" >First Name</label>
	        <div className="col-lg-8">
	        <input type="text" className="form-control" placeholder='Enter First Name.' id='searchBox' onChange={this.changeFirstName}/>
	        <div id="FirstName"/>
	        </div>
	        </div>
	       

	        <div className="form-group" >
	        <label className="col-lg-4 control-label" >Last Name</label>
	        <div className="col-lg-8">
	        <input type="text" className="form-control" placeholder='Enter Last Name.' id='searchBox' onChange={this.changeLastName}/>
	        <div id="LastName"/>
	        </div>
	        </div>

	        <div className="form-group" >
	        <label className="col-lg-4 control-label" >Age</label>
	        <div className="col-lg-8">
	        <input type="number" className="form-control" placeholder='Enter Age.' id='searchBox' onChange={this.changeAge}/>
	       	<div id="age"/>
	        </div>
	        </div>

	        <div className="form-group" >
	        <label className="col-lg-4 control-label" >Date Of Birth</label>
	        <div className="col-lg-8">
	        <input type="date" className="form-control" placeholder='Enter Date of Birth as DD/MM/YYYY' id='searchBox' onChange={this.changeDOB}/>
	        <div id="dob"/>
	        </div>
	        </div>

	        <div className="form-group" >
	        <label className="col-lg-4 control-label">Gender</label>
	       		<select name="rtype" id="searchBox" onChange={this.changeGender}>
	       			<option value="type">Select Gender</option>
	    			<option value="Male">Male</option>
				    <option value="Female">Female</option>
				    <option value="Others">Others</option>
				</select>
				<div id="gender"/>
	        </div>

	        <div className="form-group" >
	        <label className="col-lg-4 control-label">Mobile Number</label>
	        <div className="col-lg-8">
	        <input type="text" className="form-control" placeholder='Enter the Mobile Number.' id='searchBox' onChange={this.changeNumber}/>
	        <div id="mobile"/>
	        </div>
	        </div>

	        <div className="form-group" >
	        <label className="col-lg-4 control-label">Information Area</label>
	        <textarea rows="5" cols="52" onChange={this.changeDetails} placeholder='Enter details regarding the illness'/>
	        <div id="details"/>
	        </div>


	        </form>

			<div id="Submit">
	        <input type="button" className="btn btn-primary btn-medium"   value="Submit" onClick={this.sendtoSubmit}/>
			</div>



	      </div>
		)
	}
	})

module.exports=FormFill;
