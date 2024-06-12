// Import mongoose
const mongoose = require("mongoose");

// Define the user schema
const teamSchema = new mongoose.Schema({
  UserName: {
    type: String,
    required: true,
    trim: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
  },
  Designation: {
    type: String,
    trim: true,
  },

  Image: {
    type: String,
    required: false,
  },
});

// Create a model from the schema
const Team = mongoose.models.Team || mongoose.model("Team", teamSchema);

// Export the model
export default Team;
