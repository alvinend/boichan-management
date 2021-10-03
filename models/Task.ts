import mongoose, { Schema, Document } from 'mongoose'

export type ITask = {
  id: string
  name: string
  dueDate: Date
  desc: string
  assignee: string // User Id
  creator: string // User Id
}

type ITaskModel = ITask & Document


// Create Schema
const TaskSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  desc: String,
  dueDate: Date,
  assignee: String,
  creator: {
    type: String,
    required: true
  }
})

export const Task = mongoose.model<ITaskModel>('tasks', TaskSchema)
