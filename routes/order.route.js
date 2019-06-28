const express = require('express');
const router = express.Router();
const order = require('../models/ordersdb.model');
// Require the controllers WHICH WE DID NOT CREATE YET!!
const orderdb = require('../controllers/orderdb.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', orderdb.DbMedical);


router.post('/create', orderdb.order_record_create);

router.post('/add_drug', orderdb.drug_record_create);

//order
router.get('/shila',orderdb.findspecificName);

router.get('/:id', orderdb.order_details);


router.put('/:id/update', orderdb.UpdateOrderStatus);

router.delete('/:id/delete', orderdb.order_record_delete);



router.get('/find/:id', orderdb.findPatientOrders);

router.get('/all/patients', orderdb.selectAll);

//router.get('/all/patients', orderdb.selectAllAsyncExample1);
//router.get('/all/patientstest2', orderdb.selectAllAsyncExample2);


module.exports = router;