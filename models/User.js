const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    fullName: String,  // Optional: If you want to store the user's full name
    role: { type: String, default: 'user' }  // Optional: If you want to assign a default role to users (e.g., 'admin' or 'user')
});

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;
