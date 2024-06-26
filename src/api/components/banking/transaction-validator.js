const Joi = require('joi');

module.exports = {
  createTransaction: {
    body: {
      name: Joi.string().min(1).max(100).required().label('Name'),
      usersAccountId: Joi.string()
        .min(5)
        .max(60)
        .required()
        .label('User Account ID'),
      receiverAccountId: Joi.string()
        .min(5)
        .max(60)
        .required()
        .label('Receiver Account ID'),
      amount: Joi.string().min(5).max(9).required().label('Amount'),
      transactionSchedule: Joi.date().required().label('Transaction Schedule'),
      pin: Joi.string().required().min(6).max(6).label('User PIN'),
    },
  },
};
