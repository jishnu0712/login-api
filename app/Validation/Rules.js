const Joi = require('joi');
const rule = {
    signup: {
        // username: Joi.string()
        //     // .alphanum()
        //     .min(3)
        //     .max(30)
        //     .required(),

        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

        password: Joi.string()
            .min(3),
        // .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

        repeat_password: Joi.ref('password'),

        // access_token: [
        //     Joi.string(),
        //     Joi.number()
        // ],

        // birth_year: Joi.number()
        //     .integer()
        //     .min(1900)
        //     .max(2013),
    }
}

module.exports = rule