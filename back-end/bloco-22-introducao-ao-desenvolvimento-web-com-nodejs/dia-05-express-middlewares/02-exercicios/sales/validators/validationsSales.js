function validateProductName(req, res, next) {
  const { productName } = req.body;

  if (!productName) {
    return res.status(400).json({ "message": "O campo productName é obrigatório" })
  }

  if (productName.length <= 4) {
    return res.status(400).json({ "message": "O campo productName deve ter pelo menos 4 caracteres" })
  }

  next();
}

function validateDate(d) {
  const dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

  if (!dateRegex.test(d)) {
    return false
  }

  return true;
}

function validateInfos(req, res, next) {
  const { infos } = req.body;

  if (!infos) {
    return res.status(400).json({ "message": "O campo infos é obrigatório" })
  }

  const { saleDate, warrantyPeriod } = infos;

  if (!saleDate) {
    return res.status(400).json({ "message": "O campo saleDate é obrigatório" })
  }

  //optei por usar o router.use que captura error lá no salesRouter. Poderia fazer com todos, mas fiz aqui pra testar.
  if (!(validateDate(saleDate))) {
    // return res.status(400).json({ "message": "O campo saleDate não é uma data válida" })
    return next(new Error('O campo saleDate não é uma data válida'))
  }

  if (!warrantyPeriod) {
    return res.status(400).json({ "message": "O campo warrantyPeriod é obrigatório" })
  }

  if (warrantyPeriod < Number(1) || warrantyPeriod > Number(3)) {
    return res.status(400).json({ "message": "O campo warrantyPeriod precisa estar entre 1 e 3" })
  }

  next();
}

module.exports = {
  validateProductName,
  validateInfos
};