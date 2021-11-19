import * as s from 'strummer'
import { customURL } from './matchers'

const exampleGetSchema = {
  params: s.objectWithOnly({
    username: s.string()
  }),
  query: s.objectWithOnly({
    sortBy: s.optional(s.enum({
      type: 'string',
      values: ['dateCreated']
    }))
  })
}

const examplePostSchema = {
  body: s.objectWithOnly({
    name: s.string({
      max: 144
    }),
    data: customURL()
  })
}

export { exampleGetSchema, examplePostSchema }
