const express = require("express");

const {
  getRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipeController");

const router = express.Router();

router.route("/")
  .get(getRecipes)
  .post(createRecipe);

router.route("/:id")
  .patch(updateRecipe)
  .delete(deleteRecipe);

module.exports = router;