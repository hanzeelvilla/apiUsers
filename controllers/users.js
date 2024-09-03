const Sequelize = require('sequelize');
const { User } = require('../models');

module.exports = {
    create(req, res) {
        return User.create({
            name: req.body.name,
            username: req.body.username,
            password: req.body.password
        })
        .then(user => res.status(201).send(user))
        .catch(error => res.status(400).send(error))
    },
    list(req, res) {
        return User.findAll({})
        .then(user => res.status(200).send(user))
        .catch(error => res.status(400).send(error))
    },
    find(req, res) {
        return User.findAll({
            where: {
                id: req.params.id,
            }
        })
        .then(user => res.status(200).send(user))
        .catch(error => res.status(400).send(error))
    }   
}