'use strict';

module.exports = {
  attributes: {
    email: {
      type: 'string',
      required: true,
      index: true,
    },
    token: {
      type: 'string',
      required: true,
      index: true,
    },
  },
};
