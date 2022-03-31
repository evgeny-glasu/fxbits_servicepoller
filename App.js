require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5555;
const router = require('./router')
const {poll} = require(`./servicepoller`)


app.use(express.json());
app.use('/', router);

const start = () => {

    try {
        app.listen(PORT, () =>
            console.log(`Server UP! Listening PORT: ${PORT}...`));

        poll();

    } catch (err) {
        console.log(err.detail);
    }
}

app.get('/', (req, res) => {
    res.status(200).json({message: 'Server UP!'})
})

start();