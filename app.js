const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

let medicalData = [];

app.get('/items', (req, res) => {
    res.json(medicalData);
});

app.post('/items', (req, res) => {
    const data = {
      patient_name: req.body.patient_name,
      patient_address: req.body.patient_address,
      hospital_name: req.body.hospital_name,
      date_of_service: req.body.date_of_service,
      bill_amount: req.body.bill_amount
    };
    medicalData.push(data);
    res.status(201).json(data);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
