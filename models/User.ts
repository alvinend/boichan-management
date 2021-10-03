import mongoose, { Schema, Document } from 'mongoose'

export type IUser = {
  id: string
  name: string
  email: string
  password: string
}

type IUserModel = IUser & Document

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

export const User = mongoose.model<IUserModel>('users', UserSchema)
