import { taskApi } from "./api/task"
import mongoose from 'mongoose'
import { userApi } from "./api/user";

const db = process.env.MONGO_URI

// Connect to MongoDB
mongoose
  .connect(db!)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

exports.handler = async function (event, context) {
  const path = event.path
  const httpMethod = event.httpMethod
  const query = event.queryStringParameter
  const headers = event.headers
  const body = JSON.parse(event.body)

  switch (path) {
    case '/task':
      const taskData = await taskApi(path, httpMethod, query)

      context.succeed({
        statusCode: 200,
        body: JSON.stringify(taskData)
      })
      break;

    case '/user':
      const userData = await userApi(event)

      context.succeed({
        statusCode: 200,
        body: JSON.stringify(userData)
      })
      break;
  
    default:
      break;
  }

  context.succeed({
    statusCode: 200,
    body: JSON.stringify({
      event,
      test: 'AAAAAAAAA'
    })
  })
}
