const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

let medicalData = [];

app.get('/items', (req, res) => {
    res.json(medicalData);
  });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
