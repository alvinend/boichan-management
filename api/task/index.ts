import { getTasks } from "./getTasks";

export const taskApi = (path: string, httpMethod: string, query) => {
  if (httpMethod === 'GET') {
    return getTasks()
  }
}
