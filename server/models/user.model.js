const mongoose = require('mongoose'),
    bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, 'First name is required.'],
        },

        lastName: {
            type: String,
            required: [true, 'Last name is required.'],
        },

        email: {
            type: String,
            required: [true, 'Email is required.'],
            validate: {
                validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
                message: 'Please enter a valid email.',
            },
        },

        password: {
            type: String,
            required: [true, 'Password is required.'],
            minlength: [2, 'Password must be  characters or longer.'],
        },
    },

    { timestamps: true },
);

const User = mongoose.model('User', UserSchema);
module.exports.User = User;
