import { User, UserSchema } from './user-entity'

import { CommonRepository } from 'common-abstract-fares-system'

export class UserRepository extends CommonRepository<User> {
  constructor() {
    super(UserSchema, 'users')
  }
}
