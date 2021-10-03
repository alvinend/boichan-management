import { create } from "domain"
import { User } from "../../models/User"
import { createUser } from "./createUser"
import { deleteUser } from "./deleteUser"
import { fetchUser } from "./fetchUser"
import { updateUser } from "./updateUser"

export const taskApi = async (event) => {
  const path = event.path
  const httpMethod = event.httpMethod
  const query = event.queryStringParameter
  const headers = event.headers
  const body = JSON.parse(event.body)

  // Auth
  const session = headers.Authorization
  const currentUser = await User.findOne({ session })

  if (httpMethod === 'GET') {
    return await fetchUser(query)
  }

  if (httpMethod === 'POST') {
    return await createUser(
      body.name,
      body.email,
      body.password
    )
  }

  if (httpMethod === 'DELETE' ) {
    return await deleteUser(currentUser)
  }

  if (httpMethod === 'PUT') {
    return await updateUser(currentUser, body)
  }
}
