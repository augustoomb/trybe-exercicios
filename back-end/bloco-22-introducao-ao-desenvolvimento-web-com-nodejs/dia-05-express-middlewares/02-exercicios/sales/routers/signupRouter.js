const express = require('express');
const router = express.Router();
const validations = require('../validators/validationSignup')
const { validateData } = validations;

const crypto = require('crypto');

router.post('/', validateData, function (req, res) {
  const { email, password, firstName, phone } = req.body;

  const token = (crypto.randomBytes(8).toString('hex'))

  return res.status(200).json({ token: token })
})


// router.post('/', validateProductName, validateInfos, function (req, res) {
//   const { productName, infos } = req.body; // apenas para praticar, não precisa mostrar
//   return res.status(201).json({ "message": "Venda cadastrada com sucesso" })
// })

// router.use(function (err, _req, res, _next) {
//   return res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
// });

module.exports = router;