// import/require dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var ObjectId = require('mongodb').ObjectId;
var MongoClient = require('mongodb').MongoClient;

// instances
var app = express();
var router = express.Router();

// set port to either a predetermined port number, or 3001
var port = process.env.API_PORT || 3001;

// configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// connect to mongodb
MongoClient.connect('mongodb://localhost:27017/ski_hol_planner', function(err, client){
  if (err){
    return console.log(err);
  }
  db = client.db('ski_hol_planner');
  console.log('Connected to DB');

  // ensure app is listening on the port
  app.listen(port, function(){
    console.log(`App listening on port ${port}`);
  });
});

// prevent Cross Origin Resource Sharing (CORS) errors, set headeres to allow CORS with middleware
app.use(function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method, Access-Control-Request-Headers');

  // remove cacheing
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

// routes
router.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

router.get('/members', function(req, res){
  console.log('query: all party members');
  db.collection('members').find().toArray(function(err, results){
    if (err){ return console.log('DB error - all members') };
    res.json(results);
  });
});

router.get('/members/:name', function(req, res){
  var person = { $or: [ { firstName_lower: req.params.name.toLowerCase() }, { secondName_lower: req.params.name.toLowerCase() } ] };
  console.log('query: ', person);
  db.collection('members').find(person).toArray(function(err, results){
    if (err){ return console.log('DB error - members name')}
    res.json(results);
  });
});

router.get('/flight/:flightNumber', function(req, res){
  var flight = { $or: [ { 'outboundFlight.flightNumber': req.params.flightNumber }, { 'returnFlight.flightNumber': req.params.flightNumber } ] };
  console.log('query: ', flight);
  db.collection('members').find(flight).toArray(function(err, results){
    if (err){ return console.log('DB error - flight number') };
    res.json(results);
  });
});

// route startpoint and callback
app.use('/api', router);
