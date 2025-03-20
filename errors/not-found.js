import CustomAPIError from "./custom-error";
import { StatusCodes } from "http-status-codes";


export const NotFoundError = class NotFoundError extends CustomAPIError {
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.NOT_FOUND;
        this.code = 404
    }
}



// module.exports = NotFoundError;