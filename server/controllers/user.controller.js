const { User } = require('../models/user.model');

module.exports = {
    index: (req, res) => {
        User.find()
            .then(users => res.json({ results: users }))
            .catch(err => res.status(400).json(err));
    },

    show: (req, res) => {
        User.findOne({ _id: req.params.id })
            .then(user => res.json({ results: user }))
            .catch(err => res.status(400).json(err));
    },

    create: (req, res) => {
        User.create(req.body)
            .then(newUser => res.json({ results: newUser }))
            .catch(err => res.status(400).json(err));
    },

    update: (req, res) => {
        User.findOneAndUpdate({ _id: req.params.id }, req.body, {
            useFindAndModify: false,
            runValidators: true,
            new: true,
        })
            .then(updatedUser => res.json({ results: updatedUser }))
            .catch(err => res.status(400).json(err));
    },

    destroy: (req, res) => {
        User.deleteOne({ _id: req.params.id })
            .then(deletedUser => res.json({ results: deletedUser }))
            .catch(err => res.status(400).json(err));
    },
};
