var React= require('react');
var ReactDOM=require('react-dom');
var FormFill=require('./FormFill');
var MainChild2=require('./MainChild2');
var MainChild=require('./MainChild');

var ParentMainChild=React.createClass({

	getInitialState:function(){
		 return (
	      {
	      	first:null,
        	mydata: [],
	      })
	},

	sendtoBack:function(){
		this.props.Back(null);
	},

	searchFirst:function(first)
	{	
		console.log(first);
      $.ajax({
      url: "http://localhost:8080/patients/display/"+first,
      dataType: 'json',
      type:"GET",
      async: true,
      cache: false,
      success: function(data)
      {
      	console.log("success in ajax")
        this.setState({mydata : data});
        console.log(data);
      }  .bind(this),
      error: function(xhr, status, err) {
        console.error("http://localhost:8085/patients/display", status, err.toString());
      }.bind(this)
      });

      this.setState({first:first})

	},
	
	render: function()
	{	
		return (
	        <div>

	        <div>
          	<input type="button" className="btn btn-primary btn-medium"   id="SearchPatient" value="Back" onClick={this.sendtoBack}/>
        	</div>
	        <MainChild searchFirst={this.searchFirst}/>
	        <MainChild2 allData={this.state.mydata} first={this.state.first}/>
	        </div>
	        )
		
	}
	
	
})

module.exports=ParentMainChild;

