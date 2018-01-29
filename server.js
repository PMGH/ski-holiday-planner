// import/require dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// instances
var app = express();
var router = express.Router();

// set our port to either a predetermined port number if you have set it up, or 3001
var port = process.env.API_PORT || 3001;

// configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

router.get('/', function(req, res){
  res.json({ message: 'API initialised!' });
});

app.use('/api', router);

app.listen(port, function(){
  console.log(`App listening on port ${port}`);
});
