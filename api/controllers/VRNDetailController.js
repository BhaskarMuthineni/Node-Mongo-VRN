'use strict';

var mongoose = require('mongoose'),
    VRNDetail = mongoose.model('VRNDetail');

exports.create_vrn_detail = function(req, res) {
  var new_vrn_detail = new VRNDetail(req.body);
  new_vrn_detail.save(function(err, vrn) {
    if (err)
      res.send(err);
    res.json(vrn);
  });
};

exports.read_detail_vrn = function(req, res) {
    VRNDetail.find({VRN: req.params.VRN}, function(err, vrn) {
    if (err)
      res.send(err);
    
    //   VRNDetail.find({
    //     $or : [{
    //       Domain:'SEALCONDITION'
    //       }, {
    //       Domain: 'VEHICLESTATUS'
    //       }, { 
    //       Domain: 'TrnsprtMode'
    //     }]}).execute().then(docs => {
    //       var dat = {};
    //       for(var i=0;i<docs.length;i++){
    //         dat[docs[i]['Domain']+docs[i]['modeNum']] = docs[i]['modeTxt'];
    //       }
    //      that.paramValues = dat;
    //  })



    res.json(vrn);
  });
};