const path = require('path');

const express = require('express');

const shopRoutes = express.Router();

shopRoutes.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = shopRoutes;