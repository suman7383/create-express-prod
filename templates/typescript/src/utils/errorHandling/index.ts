import { Response } from 'express'
import { ErrorResponse } from './errorResponse'

//send error response(keep the error response have the same structure for all error types)
export const sendErrorResponse = (res: Response, err: ErrorResponse) => {
    return res.status(err.statusCode).json({ ...err })
}
