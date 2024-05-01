const { errorResponder, errorTypes } = require('../../../core/errors');
const authenticationServices = require('./authentication-service');
const loginAttempsFail = {};

/**
 * Handle login request
 * @param {object} request - Express request object
 * @param {object} response - Express response object
 * @param {object} next - Express route middlewares
 * @returns {object} Response object or pass an error to the next route
 */
async function login(request, response, next) {
  const { email, password } = request.body;

  try {
    //membuat limit percobaan login sebanyak 5 kali
    if (loginAttempsFail[email] && loginAttempsFail[email].attempts >= 5) {
      throw errorResponder(
        errorTypes.FORBIDDEN,
        'Too many failed login attempts! Try again after 30 minutes'
      );
    }
    // membuat jangka waktu untuk mencoba login kembali setelah 30 menit
    if (loginAttempsFail[email]) {
      const currentTime = Date.now();
      if (currentTime - loginAttempsFail[email].timeout > 30 * 60 * 1000) {
        loginAttempsFail[email].attempts = 1; // reset percobaan login menjadi 1 kembali setelah 30 menit timeout
        loginAttempsFail[email].timeout = currentTime; //cek apabila waktu batas login sudah lebih dari 30 menit
      } else {
        // +1 pada percobaan login yang gagal, bila mencoba < 30 min dari waktu timeout
        loginAttempsFail[email].attempts++;
      }
    } //untuk memproses percobaan login alamat email baru
    else {
      loginAttempsFail[email] = {
        attempts: 1,
        timeout: Date.now(),
      };
    }

    // Check login credentials
    const loginSuccess = await authenticationServices.checkLoginCredentials(
      email,
      password
    );

    if (!loginSuccess) {
      throw errorResponder(
        errorTypes.INVALID_CREDENTIALS,
        'Wrong email or password'
      );
    }

    // delete loginAttempFail apabila login berhasil.
    delete loginAttempsFail[email];

    return response.status(200).json(loginSuccess);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  login,
};
