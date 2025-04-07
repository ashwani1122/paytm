import mongoose from "mongoose";

import { Schema } from "mongoose";
const UserSchema = new Schema({
    firstName: {"type": String , require: true },
    lastName: { "type" : String , require: true},
    email: { "type": String , require: true, unique: true },
    password: { type: String ,require: true}
})

    const AccountSchema = new Schema({
    balance: { type: Number, require: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true }
})

const User =  mongoose.model("user", UserSchema);
const Account = mongoose.model("account", AccountSchema);
export default{ User, Account };