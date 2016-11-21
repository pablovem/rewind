'use strict';

var md5 = require('md5');
module.exports = {

  attributes: {
    user: {
      model: 'user'
    },
    ipAddress: {
      type: 'string'
    },
    usedAt: {
      type: 'datetime'
    },
    hash: {
      type: 'string',
      index: true
    }
  },
  beforeCreate: function (values, cb) {
    var hrtime = process.hrtime();
    values.hash = md5(hrtime + "https://www.youtube.com/watch?v=jZkdcYlOn5M");
    cb();
  } 
 
};
