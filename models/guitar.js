const mongoose = require("mongoose");

const guitarSchema = new mongoose.Schema({
  guitar_type: String,
  model: String,
  cost: {
    type: Number,
    required: true,
    validate: {
      validator: function (value) {
        // Custom validation
        return value >= 100 && value <= 1250;
      },
      message: "Cost must be between 100 and 1250.",
    },
  },
});

module.exports = mongoose.model("Guitar", guitarSchema);
