const TransferBank = require('../../../banking-schema');

async function getTransferBank() {
  return TransferBank.find({});
}

async function getTransferBankId(id) {
  return TransferBank.findId(id);
}

async function createTransferBank(
  usersAccountId,
  receiverAccountId,
  amount,
  transactionSchedule,
  pin
) {
  return TransferBank.create({
    usersAccountId,
    receiverAccountId,
    amount,
    transactionSchedule,
    pin,
  });
}

async function updateTransferBank(id, newData) {
  return TransferBank.update(
    {
      _id: id,
    },
    {
      $set: newData,
    }
  );
}

async function deleteTransferBank(id) {
  return TransferBank.delete({ _id: id });
}

module.exports = {
  getTransferBank,
  getTransferBankId,
  createTransferBank,
  updateTransferBank,
  deleteTransferBank,
};
