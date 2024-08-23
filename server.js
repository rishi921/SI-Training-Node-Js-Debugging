import express from 'express'
import randomNumber from './randomNumber.js'

const app = express();

app.get('/:number', (req, res) => {
    const number = req.params.number;
    res.status(200).send(randomNumber(number).toString())
})
app.listen(5000, () => console.log('server listening at port 5000'))