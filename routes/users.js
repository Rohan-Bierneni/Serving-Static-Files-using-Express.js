const express = require('express');
const path = require("path");

const userRoutes = express.Router();

userRoutes.get('/users', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'users.html'));
});

module.exports = userRoutes;