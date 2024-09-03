const usersController = require("../controllers/users")
const router = require("express").Router()

router.post("/", (req, res) => {
    usersController.create(req, res)
})

module.exports = router