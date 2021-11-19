import express from 'express'
import { exampleController } from './controller'
import requestValidator from '../middleware/requestValidator'
import { examplePostSchema, exampleGetSchema } from './schemas'
import { NotFoundError } from '../middleware/errorHandler'

const router = express.Router()

router.get('/', (req, res) => res.send('Express + TypeScript Server'))
router.get('/users/:username', [requestValidator(exampleGetSchema), exampleController])
router.post('/links', [requestValidator(examplePostSchema), exampleController])
router.use(async (req, res, next) => {
  if (req.route === undefined) {
    return next(new NotFoundError('Not found.'))
  }
})

export default router
