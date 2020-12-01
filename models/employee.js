const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name: { type: String, required: true },
  isArchive: { type: Boolean, required: true },
  role: { type: String, enum: ["driver", "waiter", "cook"], required: true },
  phone: { type: String, required: true },
  birthday: { type: String, required: true },
});

module.exports = mongoose.model("Employee", employeeSchema);
