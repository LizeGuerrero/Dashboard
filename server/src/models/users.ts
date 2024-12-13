import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: false
    }
});

const userName = mongoose.model("Users", usersSchema);

export default userName;