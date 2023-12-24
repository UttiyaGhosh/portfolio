const express = require("express")
const portfolioRouter = require("./portfolio")

const router = express.Router()

router.use("/",portfolioRouter)

module.exports = router