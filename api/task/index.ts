import { getTasks } from "./getTasks";

export const taskApi = async (path: string, httpMethod: string, query) => {
  if (httpMethod === 'GET') {
    return await getTasks()
  }
}
