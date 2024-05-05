const Transaction = require('../../../models/banking-schema');

/**
 * Get a list of transaction
 * @returns {Promise}
 */
async function getTransactions() {
  return Transaction.find({});
}

/**
 * Get transaction detail
 * @param {string} id - transaction id
 * @returns {Promise}
 */
async function getTransaction(id) {
  return Transaction.findbyId(id);
}

/**
 * Create transaction
 * @param {string} usersAccountId
 * @param {string} receiverAccountId
 * @param {number} amount
 * @param {date} transactionSchedule
 * @param {number} pin
 * @returns {Promise}
 */
async function createTransaction(
  usersAccountIdAccountId,
  receiverAccountId,
  amount,
  transactionSchedule,
  pin
) {
  return Transaction.create({
    usersAccountId,
    receiverAccountId,
    amount,
    transactionSchedule,
    pin,
  });
}

/**
 * Update transaction id
 * @param {string} usersAccountId
 * @param {string} receiverAccountId
 * @param {number} amount
 * @param {date} transactionSchedule
 * @param {number} pin
 * @returns {Promise}
 */
async function updateTransaction(id, newId) {
  return Transaction.updateOne(
    {
      _id: id,
    },
    {
      $set: newId,
    }
  );
}

/**
 * Delete a transaction history
 * @param {string} id - transaction id
 * @returns {Promise}
 */
async function deleteTransaction(id) {
  return Transaction.deleteOne({ _id: id });
}

module.exports = {
  getTransactions,
  getTransaction,
  createTransaction,
  updateTransaction,
  deleteTransaction,
};
