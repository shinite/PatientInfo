var mongoose=require('mongoose')
var schema=mongoose.Schema;

var patients=new schema({

	firstName: String,
	lastName: String,
	age:Number,
	dob: String,
	gender:String,
	mobile:Number,
	details:String,
})
module.exports=mongoose.model('newpatients',patients);