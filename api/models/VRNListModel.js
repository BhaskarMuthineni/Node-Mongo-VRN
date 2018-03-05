'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VRNSchema = new Schema({
    VRNNum: {
      type: String
    },
    VehNum: {
      type: String
    },
    Purpose: {
     type: String
    }
  });
  
module.exports = mongoose.model('VRNList', VRNSchema);