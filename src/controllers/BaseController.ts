import { Response } from 'express';


class BaseController {
    protected render(res: Response, statusCode: number, data?: object): Response {
        if (!data) return res.sendStatus(statusCode)
    
        return res.status(statusCode).json(data)
    }
}

export default BaseController;