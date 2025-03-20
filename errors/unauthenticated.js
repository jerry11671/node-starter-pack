import CustomAPIError from "./custom-error";
import { StatusCodes } from "http-status-codes";


class UnauthenticatedError extends CustomAPIError {
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.UNAUTHORIZED;
        this.code = 401
    }
}



module.exports = UnauthenticatedError;