'use strict';

module.exports = {
  attributes: {
    link: {
      type: 'string',
      required: true,
      url: true,
      index: true,
      unique: true
    },
    lastAttempt: {
      type: 'datetime',
      defaultsTo: null
    },
    lastSuccess: {
      type: 'datetime',
      defaultsTo: null
    },
    errorCount: {
      type: 'integer',
      defaultsTo: 0
    },
    invalid: {
      type: 'boolean',
      defaultsTo: false
    }
  }
};
