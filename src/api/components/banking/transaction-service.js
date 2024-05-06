const transactionRepository = require('./transaction-repository');

async function createTransaction(
  usersAccountId,
  name,
  receiverAccountId,
  amount,
  transactionSchedule,
  pin
) {
  try {
    await transactionRepository.createTransaction(
      usersAccountId,
      name,
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
    await transactionRepository.updateTransaction(id, newId);
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
