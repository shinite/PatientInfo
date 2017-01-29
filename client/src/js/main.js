var React= require('react');
var ReactDOM=require('react-dom');
var FormFill=require('./component/Submit')
var ParentMainChild=require('./component/ParentMainChild')


var Main=React.createClass({


  getInitialState: function() {
    return (
      {
        admin: null,
      })
  },

  sendtoAdmin:function()
  {
      this.setState({admin:"done"})
      //console.log("insendtoadmin")
  },

  render: function() {

    if(this.state.admin==null)
    {
      return (
      <div>

       <div>
          <input type="button" className="btn btn-primary btn-medium"   id="SearchPatient" value="Patient Search" onClick={this.sendtoAdmin}/>
      </div>
      
      <FormFill/>

     

      </div>

    )
  }
  else
  {
      return (
        <div>
        <ParentMainChild/>
        </div>
      )

  }
}

})

ReactDOM.render(<Main/>,document.getElementById('app')); 