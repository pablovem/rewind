'use strict';

module.exports = {
	connection: 'mysql',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  autoTK: false,
	tableName: 'products',
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'id',
    },
    name: {
      type: 'string',
      columnName: 'product',
    },
    description: {
      type: 'string',
    },
    extra: {
      type: 'string',
      columnName: 'description_extra',
    },
    priceRetail: {
      type: 'float',
      columnName: 'priceb',
    },
    priceReseller: {
      type: 'float',
      columnName: 'pricea',
    },
    productType: {
      type: 'string',
      columnName: 'type',
    },

    maintenanceInterval: {
      type: 'string',
      columnName: 'repeat',
    },
    maintenancePriceRetail: {
      type: 'float',
      columnName: 'repeat_price',
    },
    maintenancePriceReseller: {
      type: 'float',
      columnName: 'repeat_aprice',
    },

    renewalInterval: {
      type: 'string',
      columnName: 'renewal_interval',
    },
    renewalPriceRetail: {
      type: 'float',
      columnName: 'renewal_price_retail',
    },
    renewalPriceReseller: {
      type: 'float',
      columnName: 'renewal_price',
    },

    submissionModule: {
      type: 'string',
      columnName: 'submission_module',
    },
    submissionModuleRequirements: {
      type: 'json',
      columnName: 'submission_module_requirements',
    },
    submissionModuleOption: {
      type: 'string',
      columnName: 'submission_module_option',
    },
    replacement: {
      type: 'json',
    },
  },
};

