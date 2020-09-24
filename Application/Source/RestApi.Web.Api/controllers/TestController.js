const asyncMiddleware = require("../../RestApi.Core/Middleware/async");
const express = require("express");
const router = express.Router();
const testService = require("../../RestApi.Core/Services/Tests/TestService");
const responseService = require("../../RestApi.Core/Services/ResponseService");

// @route  Get api/test
// @desc   Sample Data
// @access Public
// router.get("/", asyncMiddleware(async (req, res, next) => {
//   console.log("Controller called....");
//   let customers;
//   try {
//     customers = testService.getUser(1234);
//     console.log("customers...", customers);
//     responseService.sendSuccessResponse(res, customers);
//     //   res.json({ customers });
//   } catch (error) {
//     console.log("Controller error abd:::", error);
//     // Working
//     res.status(500).json({ error: error.toString() });
//     // Working
//     // responseService.sendErrorResponse(res, error.toString());
//   }
// });

// @route  Get api/test
// @desc   Sample Data
// @access Public
router.get("/test", async (req, res) => {
	console.log("Controller called....");
	const customers = testService.getUser(1234);
	console.log("customers...", customers);
	responseService.sendSuccessResponse(res, customers);
});

// @route  Post api/test
// @desc   Sample Data
// @access Public
router.post("/", async (req, res) => {
	console.log("regist user called...");
	var result = await testService.registerUser(req.body);
	return responseService.sendSuccessResponse(res, result);
});

module.exports = router;
