import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  experience: String,
  applyLink: String,
});

export default mongoose.models.Job || mongoose.model("Job", JobSchema);
