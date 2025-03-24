const express = require("express")
const { getUserTask, updateTaskStatus } = require("../controller/userTaskController")

const router = express.Router()

router.get("/:id", getUserTask)
router.put("/:tid", updateTaskStatus);

module.exports = router