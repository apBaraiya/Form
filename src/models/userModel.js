import mongoose from "mongoose";
// import { type } from "os";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: [true, "Please Provide a username"],
    // unique:true
  },
  email: {
    type: String,
    require: [true, "Please Provide an email"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "Please Provide an password"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
})

const User = mongoose.model.users || mongoose.model("users", userSchema);

export default User
