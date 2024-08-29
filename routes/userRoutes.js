const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
} = require("../controllers/userController");

router.route("/").get(getAllUsers);

router.route("/showMe").get(showCurrentUser);
router.route("/updateUser").patch(updateUser);
router.route("/updateUserPassword").patch(updateUserPassword);

//if we place a route '/[xyz]' after the id route(below), express is gonna think that the is you are passing in is [xyz](in the route you place below id)
router.route("/:id").get(getSingleUser);
module.exports = router;
