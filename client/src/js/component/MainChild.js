var React= require('react');
var ReactDOM=require('react-dom');
var FormFill=require('./FormFill');



var MainChild=React.createClass({

	getInitialState:function(){
		 return (
	      {
	        first:" ",
        	mydata: null,
	      })
	},

	changeFirst:function(e)
	{
		return(
		this.setState({first:e.target.value.toLowerCase()})
		)
	},


	sendtoParent:function()
	{		
      this.props.searchFirst(this.state.first)

	},
	
	render: function()
	{	
		return(
			<div >
	        <input type="text" className="form-control" placeholder='Enter first name of patient you wish to Search.' id='searchName' onChange={this.changeFirst}/>
	        <input type="button" className="btn btn-primary btn-medium"   id='nameButton' value="Submit" onClick={this.sendtoParent}/>
			</div>

			)
		
	
	}
})

module.exports=MainChild;

