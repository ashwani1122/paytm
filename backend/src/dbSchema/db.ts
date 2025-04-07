import mongoose from "mongoose";

import { Schema } from "mongoose";
const UserSchema = new Schema({
    firstName: {"type": String , require: true },
    lastName: { "type" : String , require: true},
    email: { "type": String , require: true, unique: true },
    password: { type: String ,require: true}
})

const User =  mongoose.model("user", UserSchema);
export default User;