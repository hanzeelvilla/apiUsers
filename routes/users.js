const usersController = require("../controllers/users")
const router = require("express").Router()

router.get("/", (req, res) => {
    usersController.list(req, res)
})

router.get("/:id", (req, res) => {
    usersController.find(req, res)
})

router.post("/", (req, res) => {
    usersController.create(req, res)
})

module.exports = router