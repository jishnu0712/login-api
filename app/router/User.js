const express = require("express");
const rules = require("../Validation/Rules")
const mongoose = require("mongoose")
const db = require("../db/db")
const User = require("../Model/User")

const Joi = require('joi');

const schema = Joi.object(rules.signup)

const router = express.Router()


router.get('/', (req, res) => {
    res.send('User list')
})
router.post('/new', async (req, res) => {
    //validate & sanitize data
    let value = {}
    try {
        value = await schema.validateAsync(req.body);
    } catch (err) {
        return res.status(400).json({ status: false, message: err.message })
    }
    //save data
    try {
        const user = new User(value)
        const savedUser = await user.save()
        return res.status(200).json({ status: true, message: "saved successfully" })
    } catch (err) {
        console.error("err: ", err);
        return res.status(200).json({ status: false, message: err.message })
    }

})

module.exports = router