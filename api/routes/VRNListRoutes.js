'use strict';
module.exports = function(app) {
  var vrnList = require('../controllers/VRNListController');

  // vrnList Routes
  app.route('/VRNList')
    .get(vrnList.list_all_vrns)
    .post(vrnList.create_a_vrn);


  app.route('/VRNList/:VRNNum')
    .get(vrnList.read_a_vrn)
    .put(vrnList.update_a_vrn)
    .delete(vrnList.delete_a_vrn);
};