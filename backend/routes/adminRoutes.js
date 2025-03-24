const express = require("express");
const {
  tastAdd,
  allTasts,
  allUsers,
} = require("../controller/adminController");

const router = express.Router();

router.get("/task", allTasts);
router.get("/user", allUsers);
router.post("/task", tastAdd);

module.exports = router;
