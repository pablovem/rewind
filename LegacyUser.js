'use strict';

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  autoTK: false,
	tableName: 'adminusers',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'user_id',
    },
    partner: {
      type: 'string',
      columnName: 'username',
    },
    firstName: {
      type: 'string',
      columnName: 'name',
    },
    lastName: {
      type: 'string',
      columnName: 'last',
    },
    email: {
      type: 'string',
      required: true,
    },
    password: {
      type: 'string',
      columnName: 'password',
    },
    role: {
      type: 'string',
      enum: ['admin', 'agent', 'manager', 'sales', 'staff'],
      defaultsTo: 'admin',
      columnName: 'utype',
    },
  },
};

