import mongoose from 'mongoose'

export class Content {
  _id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId()

  route: string = ''

  componentName: string = ''

  content: string[]
}

export const ContentSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  route: String,
  componentName: String,
  content: Array<String>,
})
