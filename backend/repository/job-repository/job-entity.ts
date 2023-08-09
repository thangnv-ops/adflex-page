import mongoose from 'mongoose'

export class Job {
  _id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId()

  title: string = ''

  quantity: number = 0

  content: string = ''

  deadline: string = ''

  salary: string = ''
}

export const JobSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  title: String,
  content: String,
  deadline: String,
  salary: String,
  quantity: Number,
})
