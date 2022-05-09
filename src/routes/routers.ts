import { Router } from 'express'

import UpdatesRoutes from './UpdatesRouter'

const router: Router = Router()

router.use('/', UpdatesRoutes)

export default router