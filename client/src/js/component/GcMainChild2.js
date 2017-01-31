
var React=require('react')
var MainChild2=React.createClass({

 

  render: function(){

    if(this.props.allData.firstName==this.props.first)
    {
    return (
      <div>
      <table id="table" >
      
      <tr>
      <td id="head"> First Name</td>
      <td> {this.props.allData.firstName} </td>
      </tr>

       <tr>
      <td id="head"> Last  Name</td>
      <td> {this.props.allData.lastName} </td>
      </tr>
      
      <tr>
      <td id="head"> Age</td>
      <td> {this.props.allData.age} </td>
      </tr>

      <tr>
      <td id="head"> Date Of Birth</td>
      <td> {this.props.allData.dob} </td>
      </tr>

      <tr>
      <td id="head"> Gender</td>
      <td> {this.props.allData.gender} </td>
      </tr>


      <tr>
      <td id="head">Mobile Number</td>
          <td>{this.props.allData.mobile}</td>
      </tr>

      <tr>
      <td id="head"> Details</td>
      <td> {this.props.allData.details} </td>
      </tr>
      </table>

      <p>----------------------------------------------------------------------------------------------------</p>
  
      </div>

    )
  }
  else
  {
    return(
    <div>
    </div>
    )
  }
}
});
module.exports=MainChild2;

