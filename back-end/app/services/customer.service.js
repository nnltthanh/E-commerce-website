// const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const User = require('../models/user');

class CustomerService {
    constructor(client) {
        this.Customer = client.db().collection("user");
    }

    //get information of customer from app
    getCustomerData(payload) {
        return {
            username: payload.username,
            email: payload.email,
            password: payload.password,
            role: 1
        }
    }

    async createCustomerData(payload) {
        const customer = this.getCustomerData(payload);
        const result = await User.findOne({username: customer.username, roles: 1}).exec();

        if (!result) {
            customer.save();
        }
    
    }
}

module.exports = CustomerService;