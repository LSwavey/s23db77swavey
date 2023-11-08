const mongoose = require("mongoose")
const guitarSchema = mongoose.Schema ( {
    guitar_type: String,
    model: String,
    cost: Number
})

module.exports = mongoose.model("Guitar", guitarSchema)