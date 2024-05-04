const bankingSchema = {
  usersAccountId: String,
  receiverAccountId: String,
  amount: Number,
  transactionSchedule: Date,
  pin: Number,
};

module.exports = bankingSchema;
