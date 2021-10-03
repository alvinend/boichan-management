import { login } from "./login"

export const loginApi = async (event) => {
  const path = event.path
  const httpMethod = event.httpMethod
  const headers = event.headers
  const body = JSON.parse(event.body)

  if (httpMethod === 'POST') {
    return await login(body.email, body.password)
  }

}
