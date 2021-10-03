import { IUserModel } from "../../models/User";

export const updateUser = async (
  currentUser: IUserModel,
  body: any
) => {
  // TODO Validation

  // Update User
  currentUser.email = body?.email || currentUser.email
  currentUser.name = body?.name || currentUser.name
  currentUser.password = body?.password || currentUser.password

  await currentUser.save()

  return { user: currentUser }
}
