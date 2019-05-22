const express = require('express');
const app = express();

app.get("/subscriptions/good", (req, res) => {
	res.json({"success": true})
});

app.get("/subscriptions/bad", (req, res) => {
	res.json({"success": false})
});

module.exports = app;