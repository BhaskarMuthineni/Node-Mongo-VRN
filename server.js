var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  VRNHeader = require('./api/models/VRNHeaderModel'), //created model loading here
  VRNDetail = require('./api/models/VRNDetailModel'), //created model loading here
  License = require('./api/models/LicenseModel'),
  LicenseRegion = require('./api/models/LicenseRegion'),
  ParamsModel = require('./app/models/ParamsModel'),
  TransporterModel = require('./api/models/TransporterModel'),
  VehicleModel = require('./api/models/VehicleModel'),
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost/vrndb');//https://cluster0-shard-00-00-lrnbl.mongodb.net:27017
mongoose.connect('mongodb://admin:admin123@cluster0-shard-00-00-lrnbl.mongodb.net:27017,cluster0-shard-00-01-lrnbl.mongodb.net:27017,cluster0-shard-00-02-lrnbl.mongodb.net:27017/VRN?authSource=admin&replicaSet=Cluster0-shard-0&ssl=true');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/Routes'); //importing route
routes(app); //register the route

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);