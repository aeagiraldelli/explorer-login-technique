const AppError = require('../utils/AppError');

/**
 * @param {String[]} rolesToVerify
 */
function verifyUserAurthorization(rolesToVerify) {
  /**
   * @param {import('express').Request} request
   * @param {import('express').Response} response
   * @param {import ('express').NextFunction} next
   */
  return (request, response, next) => {
    const { role } = request.user;
    if (!rolesToVerify.includes(role)) {
      throw new AppError('Unauthorized', 401);
    }

    return next();
  };
}

module.exports = verifyUserAurthorization;
