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
    },
    update(req, res) {
        return User.update(
            {
                name: req.body.name,
                username: req.body.username,
                password: req.body.password
            },
            {
                where: { id: req.params.id }
            }
        )
        .then(updated => {
            if (updated[0] == 0) {
                return res.status(404).send({ message: 'User not found' });
            }
            return res.status(200).send({ message: 'User updated successfully'});
        })
        .catch(error => res.status(400).send(error));
    },
    delete(req, res) {
        return User.destroy({
            where: { id: req.params.id }
        })
        .then(deleted => {
            if (!deleted) {
                return res.status(404).send({ message: 'User not found' });
            }
            return res.status(200).send({ message: 'User deleted successfully' });
        })
        .catch(error => res.status(400).send(error));
    }

}