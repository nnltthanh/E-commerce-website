const express = require('express');
const customer = require('../controllers/customer.controller');
// const { route } = require('../../app');

const customer_router = express.Router();

customer_router.route("/")
    .get()
    .post()
    .delete()
    .patch();

customer_router.route("/product")
    .get();

customer_router.route("/cart")
    .get()
    .delete()
    .patch();


module.exports = customer_router;