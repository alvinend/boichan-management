import { IUserModel } from '../../models/User'

export const deleteUser = async (
  currentUser: IUserModel
) => {
  // TODO Validation

  // Delete User
  await currentUser.delete()

  return {}
}
