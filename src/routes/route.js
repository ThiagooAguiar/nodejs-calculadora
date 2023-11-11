const route = require('express').Router();

route.get('/', (req, res) => {
    res.json({ message: 'Calculadora API Unifil'})
});

route.post('/soma', (req, res) => {
    const { num1, num2 } = req.body;
    const soma = num1 + num2;
    res.json({ soma })
});

route.post('/subtracao', (req, res) => {
    const { num1, num2 } = req.body;
    const subtracao = num1 - num2;
    res.json({ subtracao })
});

route.post('/multiplicacao', (req, res) => {
    const { num1, num2 } = req.body;
    const multiplicacao = num1 * num2;
    res.json({ multiplicacao })
});

route.post('/divisao', (req, res) => {
    const { num1, num2 } = req.body;
    const divisao = num1 / num2;
    res.json({ divisao })
});

module.exports = route;