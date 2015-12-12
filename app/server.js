	//------------створюємо сервер---------------
var express = require('express');
var mongoose = require('mongoose');
// Connect to the beerlocker MongoDB
mongoose.connect('mongodb://localhost:27017/customers');
var bodyParser = require('body-parser');
var Person = require('./models/person');
var Customer = require('./models/customer');

var app = express();
app.use(bodyParser.urlencoded({
  extended: true
}))
.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})
.use(bodyParser.json()); //--------важно----

var port = process.env.PORT || 3000;

var router = express.Router();

router.get('/persons', function(req, res) {
	//-------------извлечение всех данных---------------
	Person.find({}, function(err, persons) {
	if (err) throw err;
		res.json(persons);
	});
});


var personadd = router.route('/persons');

personadd.post(function(req, res) {
		
  var person = new Person();
    
  person.name.first = req.body.first || '';;
  person.name.last = req.body.last || '';;
  person.dateOfBirth = req.body.dateOfBirth || '';;

  person.save(function(err) {
    if (err)
      res.send(err);

    res.json(person);
  });
});

var personMod = router.route('/persons/:id');

personMod.delete(function(req, res) {
	var id = req.params.id
		console.log(id);
  Person.findByIdAndRemove(id, function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Pers removed from the persons!' });
  });
     
});

personMod.put(function(req, res) {
	var id = req.params.id
		console.log(id);
  
  
  Person.findById(id, function(err, person) {
    if (err)
      res.send(err);

    
    person.name.first = req.body.name.first || '';
	person.name.last = req.body.name.last || '';
	person.dateOfBirth = req.body.dateOfBirth || '';
    
    person.save(function(err) {
      if (err)
        res.send(err);

      res.json(person);
    });
  });
      
});
//-------------------------------------------------------------------
//----------------------------------------------------
router.get('/customers', function(req, res) {
	//-------------извлечение всех данных---------------
	Customer.find({}, function(err, customers) {
	if (err) throw err;
		res.json(customers);
	});
});

var customeradd = router.route('/customers');

customeradd.post(function(req, res) {
		
  var customer = new Customer();
    
  customer.name.first = req.body.first || '';
  customer.name.last = req.body.last || '';
  customer.dateOfBirth = req.body.dateOfBirth || '';
  customer.companyName = req.body.companyName || '';
  customer.phone.mobile = req.body.mobile || '';
  customer.phone.work = req.body.work || '';
  customer.skype = req.body.skype || '';
  
  customer.save(function(err) {
    if (err)
      res.send(err);

    res.json(customer);
  });
});

var customerMod = router.route('/customers/:id');

customerMod.delete(function(req, res) {
	var id = req.params.id
		console.log(id);
  Customer.findByIdAndRemove(id, function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Customer removed from the customers!' });
  });
     
});

customerMod.put(function(req, res) {
	var id = req.params.id
		console.log(id);
  
  
  Customer.findById(id, function(err, customer) {
    if (err)
      res.send(err);

    customer.name.first = req.body.name.first || '';
	customer.name.last = req.body.name.last || '';
	customer.dateOfBirth = req.body.dateOfBirth || '';
	customer.companyName = req.body.companyName || '';
	customer.phone.mobile = req.body.phone.mobile || '';
	customer.phone.work = req.body.phone.work || '';
	customer.skype = req.body.skype || '';
    
    customer.save(function(err) {
      if (err)
        res.send(err);

      res.json(customer);
    });
  });
      
});
	
app.use('/api', router);

	// Запускаємо сервер
app.listen(port);
console.log('server start' + port);