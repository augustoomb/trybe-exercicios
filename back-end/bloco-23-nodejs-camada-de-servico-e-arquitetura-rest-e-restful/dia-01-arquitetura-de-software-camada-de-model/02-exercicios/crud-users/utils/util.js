// REGEX PARA VERIFICAR SE UM E-MAIL É VALIDO
function emailIsValid(email) {
  const emailRegex = /^\w+(\[\+\.-\]?\w)*@\w+(\[\.-\]?\w+)*\.[a-z]+$/i;

  if (!emailRegex.test(email)) {
    return false;
  }

  return true;
}

module.exports = {
  emailIsValid,
}
