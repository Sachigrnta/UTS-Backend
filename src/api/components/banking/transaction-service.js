const transactionRepository = require('./transactionRepository');

async function createTransaction(
  usersAccountId,
  receiverAccountId,
  amount,
  transactionSchedule,
  pin
) {
  try {
    await transactionRepository.createTransaction(
      usersAccountId,
      receiverAccountId,
      amount,
      transactionSchedule,
      pin
    );
  } catch (error) {
    return null;
  }
}

async function getTransaction(id) {
  try {
    await transactionRepository.getTransaction(id);
  } catch (error) {
    return null;
  }
}

async function updateTransaction(id, newData) {
  try {
    await transactionRepository.updateTransaction(id, newData);
  } catch (error) {
    return null;
  }
}

async function deleteTransaction(id) {
  try {
    await transactionRepository.deleteTransaction(id);
  } catch (error) {
    return null;
  }
}

module.exports = {
  createTransaction,
  getTransaction,
  updateTransaction,
  deleteTransaction,
};
