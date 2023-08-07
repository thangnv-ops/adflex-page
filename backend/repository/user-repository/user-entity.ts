import mongoose from 'mongoose'

export class User {
  _id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId()

  name: string = ''

  username: string = ''

  password: string = ''

  email: string = ''

  phone: string = ''

  created: Date = new Date()

  modified: Date = new Date()

  token: string = ''

  code: string = ''

  codeExpired: Date = new Date()

  twoFactor: boolean = false

  active: boolean = false
}

export const UserSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: String,
  username: String,
  password: String,
  email: String,
  phone: String,
  created: Date,
  modified: Date || null,
  code: String,
  token: String,
  codeExpired: Date,
  twoFactor: Boolean,
  active: Boolean,
})
