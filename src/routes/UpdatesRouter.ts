import { Router } from 'express'

import UpdatesController from '../controllers/UpdatesController';

const updatesController: UpdatesController = new UpdatesController()
const router: Router = Router()

router.post('/updates', updatesController.createUpdates)
router.get('/updates', updatesController.getUpdates)

export default router