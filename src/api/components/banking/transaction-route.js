const express = require('express');

const transactionControllers = require('./transaction-controller');
const transactionValidator = require('./transaction-validator');
const authenticationMiddleware = require('../../middlewares/authentication-middleware');
const celebrate = require('../../../core/celebrate-wrappers');

const route = express.Router();

module.exports = (app) => {
  app.use('/transactions', route);

  // Create transaction
  route.post(
    '/',
    authenticationMiddleware,
    celebrate(transactionValidator.createTransaction),
    transactionControllers.createTransaction
  );

  // Get transaction detail
  route.get(
    '/:id',
    authenticationMiddleware,
    transactionControllers.getTransaction
  );

  // Update transaction
  route.put(
    '/:id',
    authenticationMiddleware,
    celebrate(transactionValidator.createTransaction),
    transactionControllers.updateTransaction
  );

  // Delete transaction
  route.delete(
    '/:id',
    authenticationMiddleware,
    transactionControllers.deleteTransaction
  );
};
