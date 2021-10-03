import { taskApi } from "./api/task"

exports.handler = async function (event, context) {
  const path = event.path
  const httpMethod = event.httpMethod
  const query = event.queryStringParameter
  let response = {}

  switch (path) {
    case '/task':
      context.succeed({
        statusCode: 200,
        body: JSON.stringify(taskApi(path, httpMethod, query))
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
