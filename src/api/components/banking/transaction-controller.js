const transactionService = require('./transaction-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function createTransaction(request, response, next) {
  try {
    const usersAccountId = request.body.usersAccountId;
    const amount = request.body.amount;
    const receiverAccountId = request.body.receiverAccountId;
    const transactionSchedule = request.body.transactionSchedule;
    const pin = request.body.pin;
    const name = request.body.name;

    const success = await transactionService.createTransaction(
      usersAccountId,
      name,
      receiverAccountId,
      amount,
      transactionSchedule,
      pin
    );

    if (success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to create users'
      );
    }

    return response.status(200).json({
      usersAccountId,
      name,
      receiverAccountId,
      amount,
      transactionSchedule,
      pin,
    });
  } catch (error) {
    return next(error);
  }
}

async function getTransaction(request, response, next) {
  try {
    const id = request.body.id;
    const transaction = await transactionService.getTransaction(id);

    if (!transaction) {
      throw errorResponder(errorTypes.NOT_FOUND, 'Transaction not found');
    }
    return response.status(200).json({ id });
  } catch (error) {
    return next(error);
  }
}

async function updateTransaction(request, response, next) {
  try {
    const id = request.body.id;
    const newId = request.body.newId;

    if (IdAlreadyTaken) {
      throw errorResponder(
        errorTypes.EMAIL_ALREADY_TAKEN,
        'ID is already registered'
      );
    }
    const success = await transactionService.updateTransaction(id);
    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to update Id'
      );
    }
    return response.status(200).json({ id });
  } catch (error) {
    return next(error);
  }
}
async function deleteTransaction(request, response, next) {
  try {
    const id = request.body.id;

    const success = await transactionService.deleteTransaction(id);
    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to delete transaction'
      );
    }

    return response.status(200).json({ id });
  } catch (error) {
    return next(error);
  }
}
module.exports = {
  createTransaction,
  getTransaction,
  updateTransaction,
  deleteTransaction,
};
