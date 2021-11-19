import { Request, Response } from 'express'
import { examplePresenter } from './presenter'
import { findUser } from '../queries/users'
import { NotFoundError, ServerError } from '../middleware/errorHandler'

const exampleController = async (req: Request, res: Response, next: Function) => {
  try {
    const user = await findUser(req.params.username)
    if (user === undefined) {
      return next(new NotFoundError('User not found.'))
    }

    res.send({
      status: 200,
      message: '',
      result: examplePresenter()
    })
  } catch (error) {
    return next(new ServerError('Database error.'))
  }
}

export { exampleController }
