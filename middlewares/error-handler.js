import { StatusCodes } from "http-status-codes"

export const errorHandlerMiddleware = async (err, req, res) => {
    let customError = {
        message: err.message || "Something went wrong, please try again later",
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        code: err.code || 500
    }

    return res.status(customError.statusCode).json({success: false, status_code: customError.code, message: customError.message})
}

