import { User } from "../../models/User"

export const fetchUser = async (
  query?: any
) => {
  if (query) {
    const users = await User.find(query)

    return { users }
  }

  const users = await User.find()

  return { users }
}
