import mongoose from "mongoose";
import  {Schema}  from "mongoose";

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model("user", userSchema);

export default User;
