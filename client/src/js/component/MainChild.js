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
			<div id='searchName'>
			 <div className="input-group">
      		
	        <input type="text" className="form-control" placeholder='Enter first name of patient you wish to Search.'  onChange={this.changeFirst}/>
	        	<span className="input-group-btn">
	        <input type="button" className="btn btn-primary btn-medium"   value="Submit" onClick={this.sendtoParent}/>
			</span>
			</div>
			</div>

			)
		
	
	}
})

module.exports=MainChild;

