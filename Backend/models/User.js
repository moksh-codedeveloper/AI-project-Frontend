import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: String,
  auth0Id: { type: String, required: true, unique: true },
});

export const User = mongoose.model("User", userSchema);
