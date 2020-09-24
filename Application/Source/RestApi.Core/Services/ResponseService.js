const BaseService = require("./BaseService");

module.exports = class ResponseService extends BaseService {
    constructor() {
        super("Response Service");
    }

    static sendSuccessResponse(response, data) {
        response.send({
            success: true,
            result: {
                data
            }
        });
    }
    static sendErrorResponse(response, err) {
        const errStatus = err.status || 500;
        response.status(errStatus).send({
            success: false,
            error: err.message
        });
    }
};