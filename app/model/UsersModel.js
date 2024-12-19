import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
            firstName: {type: String, required: true},
            lastName: {type: String, required: true},
            NIDNumber: {type: String, required: true},
            phoneNumber: {type: String, required: true},
            password: {type: String, required: true},
            bloodGroup: {type: String, required: true},

    },
    { timestamps: true , versionKey: false}
)

const UsersModel = mongoose.model("users", userSchema);
export default UsersModel