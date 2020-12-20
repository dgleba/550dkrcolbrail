var mongoose = require("mongoose");

var BookSchema = new mongoose.Schema({}, { strict: false });

module.exports = mongoose.model("Book", BookSchema);
