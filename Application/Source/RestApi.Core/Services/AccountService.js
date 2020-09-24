const UserModel = require("../Models/UserModel");
const BaseService = require("./BaseService");
const BadRequest = require("../Exceptions/BadRequest");

module.exports = class AccountService extends BaseService {
    constructor() {
        super("Account Service");
    }

    static async registerUser(req, res, next) {
        function getUser() {
            return UserModel
                .findOne({
                    email: req.email
                })
                .exec()
        }
        try {
            let usr = await getUser();
            if (usr)
                throw new BadRequest("Email already exists");
            const newUser = new user({
                name: req.name,
                email: req.email,
                password: req.password
            });
            newUser
                .save()
                .then(user => {
                    console.log("save", user);
                    return user;
                })
                .catch(err => console.log("error", err));

        } catch (error) {
            throw new Error(error);
        }
        return req.email;
    }
};