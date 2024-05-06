const bankingSchema = {
  usersAccountId: String,
  name: String,
  receiverAccountId: String,
  amount: Number,
  transactionSchedule: Date,
  pin: Number,
};

module.exports = bankingSchema;
