const express = require('express');
const router = express.Router();
const validations = require('../validators/validationsSales')
const { validateProductName } = validations;
const { validateInfos } = validations;


router.post('/', validateProductName, validateInfos, function (req, res) {
  const { productName, infos } = req.body; // apenas para praticar, não precisa mostrar
  return res.status(201).json({ "message": "Venda cadastrada com sucesso" })
})

router.use(function (err, _req, res, _next) {
  return res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

module.exports = router;