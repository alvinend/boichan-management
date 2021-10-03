import { taskApi } from "./api/task"
import mongoose from 'mongoose'

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

  switch (path) {
    case '/task':
      const data = await taskApi(path, httpMethod, query)

      context.succeed({
        statusCode: 200,
        body: JSON.stringify(data)
      })
      break;
  
    default:
      break;
  }

  context.succeed({
    statusCode: 200,
    body: '{"result":"completed"}'
  })
}
