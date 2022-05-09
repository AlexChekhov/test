import { NextFunction, Request, Response } from 'express';

import BaseController from './BaseController';
import UpdatesService from '../services/UpdatesServise';
import { postChecker, getChecker } from '../helpers/BodyChecker';

const updatesService: UpdatesService = new UpdatesService();


class UpdatesController extends BaseController {
    
    public async createUpdates(req: Request, res: Response, next: NextFunction): Promise<Response> {
        if (postChecker(req.body)) {
            const { id, payment, currency, paymentee } = req.body;

            await updatesService.createPayment(id, payment, currency, paymentee);

            return super.render(res, 201, { status: "OK" })
        } else {
            return super.render(res, 200, { message: "Не корректно заполнены данные!" })
        }
    }

    public async getUpdates(req: Request, res: Response, next: NextFunction): Promise<Response> {
        if (getChecker(req.query)) {
            const group = req.query.grouping

            const result = await updatesService.getPayments(group);

            return super.render(res, 200, { updates: result })
        } else {
            const result = await updatesService.getPayments();

            return super.render(res, 200, { updates: result })
        }
    }
}

export default UpdatesController;