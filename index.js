const express = require('express')
const helmet = require('helmet')

const app = express()
app.use(helmet())

app.get('*', (req, res) => {
    res.sendStatus(200)
});

module.exports = app
