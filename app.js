const http = require('http');
const path = require('path');

const express = require('express');

const shopRouter = require('./routes/shop');
const userRoutes = require('./routes/users');

const app = express();

app.use(userRoutes);

app.use(shopRouter);

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);