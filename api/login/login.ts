import { User } from "../../models/User"
import { v4 as uuidv4 } from 'uuid'

export const login = async(
  email: string,
  password: string
) => {
  // TODO Validation

  // Find User by Email
  const user = await User.findOne({ email })

  // Check for User
  if (!user) {
    throw 'User not Found'
  }

  // Check Password
  if (password === user.password) {
    user.session = uuidv4()
    await user.save()
    
    return { 'session': user.session }
  }
}
