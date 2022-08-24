const bodyParser = require('body-parser');

const express = require('express');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const { Patient, Plan, Surgery } = require('./models');

app.get('/plan/:id', async (req, res) => { //passa o id de um plano e lista os pacientes dele
  try {
    const { id } = req.params;
    const patients = await Patient.findAll({
      where: { plan_id: id }
    });

    return res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ message: 'Ocorreu um erro!' });
  }
});

app.get('/patients', async (_req, res) => {
  try {
    const patients = await Patient.findAll({
      include: { model: Plan, as: 'plans' },
    });

    return res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ message: 'Ocorreu um erro!' });
  }
});

app.get('/patients-surgeries', async (_req, res) => {
  try {
    const patientsSurgeries = await Patient.findAll({
      include: [{ model: Surgery, as: 'surgeries', through: { attributes: [] } }],
    })

    return res.status(200).json(patientsSurgeries);
  } catch (error) {
    res.status(500).json({ message: 'Ocorreu um erro!' });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});