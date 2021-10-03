exports.handler = async function (event, context) {
  const path = event.path
  const httpMethod = event.httpMethod
  const query = event.queryStringParameter

  context.succeed({
    statusCode: 200,
    headers: { "X-Line-Status" : "OK"},
    body: '{"result":"completed"}'
  })
}
