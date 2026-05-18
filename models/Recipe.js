const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Recipe title is required"],
      trim: true,
      minlength: 3,
    },

    ingredients: {
      type: [String],
      required: [true, "Ingredients are required"],
      validate: {
        validator: function (value) {
          return value.length > 0;
        },
        message: "At least one ingredient is required",
      },
    },

    instructions: {
      type: String,
      required: [true, "Instructions are required"],
      trim: true,
    },

    cookingTime: {
      type: Number,
      required: [true, "Cooking time is required"],
      min: [1, "Cooking time must be greater than 0"],
    },

    difficulty: {
      type: String,
      required: true,
      enum: ["Easy", "Medium", "Hard"],
    },

    category: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

// Index for faster searches
recipeSchema.index({ category: 1 });

module.exports = mongoose.model("Recipe", recipeSchema);