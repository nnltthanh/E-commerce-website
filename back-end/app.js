const express = require('express');
const cors = require('cors');
const customerRouter = require('./app/routes/customer.route')
const ApiError = require('./app/api-error');


const app = express();

app.use(cors());
app.use(express.json());

app.use("/v1", customerRouter);

//app.get


//app.push

module.exports = app;
