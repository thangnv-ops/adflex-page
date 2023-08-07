export class UserRes {
  _id: string = ''

  name: string = ''

  username: string = ''

  email: string = ''

  phone: string = ''

  created: Date = new Date()

  modified: Date = new Date()

  twoFactor: boolean = true

  active: boolean = true
}
