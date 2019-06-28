


const mongoose = require('mongoose');
const Schema = mongoose.Schema;



let PersonSchema =new Schema ({
    id:  {type: String, required: true, max: 15},
    firstName: {type: String, required: true, max: 100},
    lastName: {type: String, required: true, max: 100},
    age: {type: Number, required: true}
});




let MedicalSchema =new Schema ({
  id:  {type: String, required: true, max: 15},
  firstName: {type: String, required: true, max: 100},
  lastName: {type: String, required: true, max: 100},
  age: {type: Number, required: true},
  orderid: {type: Number, required: true}
});

/* 
idNum:String;
firstName:String;
lastName:String;
loginDetails:ILoginDetails;
role:Role; 
*/


/* let OrderSchema =new Schema ({
 
patientDetails :{
idNum:String,
firstName:String,
lastName:String,
age:Number
  },
nurseOrderText: {type: String},
isDone: {type: Boolean, required: true},
isUnderStood: {type: Boolean},
Comment: {type: String}
}); */

let OrderSchema =new Schema ({
  idNum:String,
  firstName:String,
  lastName:String,
  nurseOrderText: {type: String},
  firstOrderDate:{type: String},
  orderDays:{type: Number},
  isUnderstood: {type: Boolean}, 
  orderDatesArray:[{date:String,isDone:Boolean}],
  Comment: {type: String},
  entryDate: {type:Date},
  date: {type:Date},
  dayOfPeriod:{type:Number },
  doctor:{type:String},
  entryUser:{type:String},
  isComplete:{type: Boolean}
  });




let DrugSchema =new Schema ({
  id:  {type: String, required: true, max: 15},
  drugType: {type: String, required: true, max: 100},
  drugName: {type: String, required: true, max: 100}
  
});  




// Export the model
//module.exports = mongoose.model('Product', ProductSchema);
const Medical = mongoose.model('Medical', MedicalSchema);
const Order = mongoose.model('Order', OrderSchema);
const Drug = mongoose.model('Drug', DrugSchema);

module.exports ={
  Medical,
  Order,
  Drug

}


