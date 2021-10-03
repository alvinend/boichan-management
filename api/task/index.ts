import { getTasks } from "./getTasks";

export const taskApi = (path: string, httpMethod: string, query) => {
  switch (path) {
    case '/task':

      break;
  
    // /task
    default:
      if (httpMethod === 'GET') {
        return getTasks()
      }

      break;
  }
}
