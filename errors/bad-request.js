import customAPIError from "./custom-error";
import { StatusCodes } from "http-status-codes";

class BadRequestError extends customAPIError {
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.BAD_REQUEST;
        this.code = 400;
    }
}



module.exports = BadRequestError;