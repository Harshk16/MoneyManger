const TestModel = require("../../Models/Test/TestModel");
const user = require("../../Models/UserModel");
const responseService = require("../ResponseService");
const BaseService = require("../BaseService");
const express = require("express");
const router = express.Router();

module.exports = class TestService extends BaseService {
    constructor() {
        super("Test Service");
    }

    static async registerData(req, res, next) {
        // console.log("data", req.body);
        try {
            TestModel.findOne({
                email: req.body.email
            }).then(data => {
                // console.log("Email exist", data);
                if (data) {
                    next(data);
                    throw new Error("email is already exists");
                    next();
                    //   return res.status(400).json({ email: "email is already exists" });
                } else {
                    const newData = new TestModel({
                        name: req.body.name,
                        fullName: req.body.fullname,
                        email: req.body.email
                    });
                    newData
                        .save()
                        .then(data => {
                            return data;
                        })
                        .catch(err => console.log(err));
                }
            });
        } catch (error) {
            console.log("error", error);

            return new Error(error);
        }
        console.log("Service called1");
    }

    static getUser(req, res, next) {
        let data;
        console.log("Body called...", req);
        try {
            if (req == "1234") {
                data = req;
            }
        } catch (error) {
            throw new Error(error);
            //   next(error);
        }
        console.log("Service called2");
        // res.json({ data });
        // responseService.sendSuccessResponse(req, data);
        return data;
    }

    static async registerUser(req, res, next) {
        function getUser() {
            return user
                .findOne({
                    email: req.email
                })
                .exec()
        }
        try {
            let usr = await getUser();
            if (usr)
                throw new Error("Email already exists");
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