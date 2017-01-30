var mongoose=require('mongoose')
var schema=mongoose.Schema;

var patients=new schema({
	firstName: {type: String, required: true},
	lastName: {type: String, required: true},
	age: {type: Number, required: true},
	dob: {type: String, required: true},
	gender:{type: String, required: true},
	mobile: {type: Number, required: true},
	details:{type: String, required: true},
})
module.exports=mongoose.model('newpatients',patients);