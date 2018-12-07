'use strict';

var async = require('async');
module.exports = function(app) {
  var mysqlDs = app.dataSources.mysqlDs;
  var Subject = app.models.Subject;
  var Cours = app.models.Cours;
  var Exercise = app.models.Exercise;

  mysqlDs.autoupdate('Subject', function(err) {
    if (err) throw err;
    console.log('\nAutoupdated table `Subject`.');

    mysqlDs.autoupdate('Cours', function(err) {
      if (err) throw err;
      console.log('\nAutoupdated table `Cours`.');
    });
    mysqlDs.autoupdate('Exercise', function(err) {
      if (err) throw err;
      console.log('\nAutoupdated table `Exercise`.');
    });
  });
};
