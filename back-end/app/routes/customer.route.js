const express = require('express');
const customer = require('../controllers/customer.controller');
const { route } = require('../../app');

const customerRouter = express.Router();

customerRouter.route("/")
    .get()
    .post()
    .delete()
    .patch();

customerRouter.route("/product")
    .get();

customerRouter.route("/cart")
    .get()
    .delete()
    .patch();

module.exports = customerRouter;