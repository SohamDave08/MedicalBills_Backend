const express = require('express');
const bodyParser = require('body-parser');
const Joi = require('joi');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

let medicalData = [];

app.get('/items', (req, res) => {
    try {
        res.json(medicalData);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error! Try again' });
    }
});

app.post('/items', (req, res) => {

    const data = Joi.object({
        patient_name: Joi.string().required(),
        patient_address: Joi.string().required(),
        hospital_name: Joi.string().required(),
        date_of_service: Joi.date().required(),
        bill_amount: Joi.number().required()
    });

    try {
        const { error, value } = data.validate(req.body);
        if(error)
        {
            res.status(400)
            .json({ message: error.details[0].message });
        }
        else
        {
            medicalData.push(value);
            res.status(201).json(value);
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error! Try again' });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
