const onlineBanking = require('../../../banking-schema');

async function getonlineBanking() {
  return onlineBanking.find({});
}

async function getonlineBankingId(id) {
  return onlineBanking.findId(id);
}

async function createonlineBanking(
  usersAccountId,
  receiverAccountId,
  amount,
  transactionSchedule,
  pin
) {
  return onlineBanking.create({
    usersAccountId,
    receiverAccountId,
    amount,
    transactionSchedule,
    pin,
  });
}

async function updateonlineBanking(id, newData) {
  return onlineBanking.update(
    {
      _id: id,
    },
    {
      $set: newData,
    }
  );
}

async function deleteonlineBanking(id) {
  return onlineBanking.onlineBanking({ _id: id });
}

module.exports = {
  getonlineBanking,
  getonlineBankingId,
  createonlineBanking,
  updateonlineBanking,
  deleteonlineBanking,
};
