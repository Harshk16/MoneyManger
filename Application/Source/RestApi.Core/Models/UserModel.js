const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User Schema
const UserSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    phoneNumber: {
        type: String
        // require: true
    },
    isActive: {
        type: Boolean
        // require: true
    },
    isOwner: {
        type: Boolean
    },
    isEmailVerfied: {
        type: Boolean
    },
    isPhoneNumberVerfied: {
        type: Boolean
    },
    createdOn: {
        type: String
        // require: true
    },
    createdBy: {
        type: String
        // require: true
    },
    deletedOn: {
        type: String
        // require: true
    },
    deletedBy: {
        type: String
        // require: true
    }
});

module.exports = User = mongoose.model("user", UserSchema);