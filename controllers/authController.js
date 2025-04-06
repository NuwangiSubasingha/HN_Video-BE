const UserModel = require('../models/User'); // Update the path as needed

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email: email });
        if (user) {
            if (user.password === password) {
                res.json("Success");
            } else {
                res.json("The password is incorrect");
            }
        } else {
            res.json("No record exists");
        }
    } catch (err) {
        res.json(err);
    }
};

const register = async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        res.json(user);
    } catch (err) {
        res.json(err);
    }
};

module.exports = { login, register };
