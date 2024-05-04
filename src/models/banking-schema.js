const { number, string, required } = require('joi');
const mongoose = require('mongoose');

const bankingSchema = new mongoose.Schema({
  usersAccountId: {
    type: String,
    required: true,
  },

  receiverAccountId: {
    type: String,
    required: true,
  },

  amount: {
    type: Number,
    required: true,
  },

  transactionSchedule: {
    type: Date,
    required: true,
  },
  pin: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('banking', bankingSchema);
