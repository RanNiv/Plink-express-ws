//const Product = require('../models/product.model');
//const Order = require('../models/product.model');
const medicalDB = require('../models/ordersdb.model');
/* const Order = require('../models/product.model');
const Drug = require('../models/product.model'); */
//Simple version, without validation or sanitation
exports.DbMedical = function (req, res) {
    res.send('Greetings from the Test controller!');
};



exports.order_record_create = function (req, res) {
    let order = new medicalDB.Order(
        {
             nurseOrderText: req.body.nurseOrderText,
              patientDetails: req.body.patientDetails,
              isDone:         req.body.isDone,
              isUnderStood: req.body.isUnderStood,
              Comment: req.body.Comment
              });

      

    order.save(function (err) {
        if (err) {
            console.log(err);
            return next(err);
        }
        res.send('medical Record Created successfully')
    })
};


exports.drug_record_create = function (req, res) {
    let drug = new medicalDB.Drug(
        {
            id: req.body.id,
            drugType: req.body.drugType,
            drugName: req.body.drugName
          
        }
    );




    drug.save(function (err)  {
        if (err) {
            return next(err);
        }
        res.send('drug Record Created successfully')
    })
};







// controllers/products.controller.js
exports.order_details = function (req, res,next) {
    medicalDB.Order.findById(req.params.id, function (err, order) {
        if (err) return next(err);
        res.send(order);
    })
};



 exports.selectAll = function(req, res) {
    medicalDB.Order.find({}, function(err, orders) {
     /*  var orderMap = {};
  
      orders.forEach(function(order) {
        orderMap[order._id] = order;
      }); */
  
      res.send(orders);  
    });
}

exports.findspecificName = function(req, res) {
/*     medicalDB.Order.findOne({nurseOrderText:"test nurseOrderText"},function (err,order){
        if (err) 
        console.log(err);
        res.send(order); 
    }); */

    medicalDB.Order.findOne({nurseOrderText:"test nurseOrderText"}).then((col)=> {
     res.send(col.nurseOrderText);

}).then((json)=>console.log("json.Comment"));


};




/* exports.findspecificName=function (req,res){

   // console.log("test connection");
    
   medicalDB.Order.find({}, function(err, orders) {

     res.send(orders);  
   });

}; */
/* medicalDB.Order.findOne({nurseOrderText:"test nurseOrderText"},function (err,order){
    if (err) 
    console.log(err);
    console.log(order);


}); */

//medicalDB.Order.findOne({nurseOrderText: 'test nurseOrderText'}, function(err,obj) { console.log(obj); });













exports.order_record_update = function (req, res) {
    medicalDB.Order.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, order) {
        if (err) return next(err);
        res.send('order Record udpated.');
    });
};


exports.order_record_delete = function (req, res) {
    medicalDB.Order.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('order Record Deleted successfully!');
    })
};