import mongoose from 'mongoose'

export class Blog {
  _id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId()

  thumbnail: string = ''

  title: string = ''

  shortDescription: string = ''

  createdDate: Date = new Date()

  content: string = ''

  slug: string = ''

  tags: string[] = []
}

export const BlogSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  thumbnail: String,
  title: String,
  shortDescription: String,
  createdDate: Date,
  content: String,
  slug: String,
  tags: Array<String>,
})
