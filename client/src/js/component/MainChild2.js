var React=require('react');
var GcMainChild2=require('./GcMainChild2');

var MainChild2=React.createClass({

  
  render:function(){
  
    var patientNodes = this.props.allData.map(function(arr) {
     return (
       <div>
       <GcMainChild2 allData={arr} first={this.props.first} />
       </div>
     );
   }.bind(this)
 ); 
   return (
         <div className="patientList">
           {patientNodes}
         </div>
       );
     
}
});

module.exports=MainChild2;