const jwt = require('jsonwebtoken');
const secret = 'meusegredo';

// uso interno
checkIsAdmin = (username, password) => {
  return (username === 'admin' && password === 's3nh4S3gur4???')
}

const createToken = (username, password) => {
  try {
    const jwtConfig = {
      expiresIn: '1h',
      algorithm: 'HS256'
    };

    const token = jwt.sign(
      { user: username, admin: checkIsAdmin(username, password) ? true : false },
      secret,
      jwtConfig
    );

    return token;
  } catch (error) {
    return {
      error: {
        statusCode: 500,
        message: error.message,
      }
    };
  }
}

const verifyToken = (token) => {
  try {
    const data = jwt.verify(token, secret)
    return data;
  } catch (error) {
    return {
      error: {
        statusCode: 500,
        message: error.message,
      }
    };
  }
}

module.exports = { createToken, verifyToken };