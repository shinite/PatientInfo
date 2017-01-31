var React= require('react');
var ReactDOM=require('react-dom');
var FormFill=require('./FormFill');


var Submit=React.createClass({

	getInitialState: function() {
    return (
      {
        success: null,Reg: " ",
      })
	},
	
	onSubmit: function(data1,done)
	{
	console.log(data1)
	this.setState({success:done})
	
	$.ajax({
      url: "http://localhost:8080/patients/add",
      dataType: 'jsonp',
      type:"POST",
      cache: false,
      data:data1,
      success: function(data2)
      {
        console.log(data2);
      },
      error: function(xhr, status, err) {
        console.error("http://localhost:8080/patients/add", status, err.toString());
      }
	});

	},	

	sendtoBack:function(){
		this.setState({success:null})
	},

	render:function(){

	if(this.state.success==null)
	{

	return(
		<div>
		<FormFill submitData={this.onSubmit}/>
		</div>
		)

	}
	else
	{
		return (
		<div id="Success">
			Your information was successfully collected.	

		<div>
          <input type="button" className="btn btn-primary btn-medium"   id="SearchPatient" value="Back" onClick={this.sendtoBack}/>
        </div>
        </div>
		)
	}
	}
})

module.exports=Submit;

