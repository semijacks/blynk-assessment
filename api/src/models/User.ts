import mongoose, { Schema } from 'mongoose'
import { IUser } from '../interfaces/user'

export interface IUserModel extends IUser {}

const UserSchema: Schema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

export default mongoose.model<IUserModel>('User', UserSchema)
