var http = require("http");
const { handleRoutes } = require("./Router/RouteHander");

const port = 8000;

var server = http.createServer(function (req, res) {

  var returnResponse = {
    statusCode: 0,
    contentType: "",
    content: "",
  };

  handleRoutes(req, function (error, result) {
    returnResponse = error ? error : result
    res.writeHead(returnResponse.statusCode, { "Content-Type": returnResponse.contentType });
    res.write(returnResponse.content);
  });

  res.end();
});
server.listen(port, function (error, response) {
  console.log(`Your server has been started and your port number is ${port}`);
});
