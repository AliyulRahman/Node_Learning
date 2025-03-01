var http = require("http");
const url = require("url");
const { convertCase } = require("./libs/textTransform");
const { getOSProperties } = require("./libs/osProperties");
const { readFile } = require("./libs/fileReader");
const { handleRoutes } = require("./Router/RouteHander");

const port = 8000;

var server = http.createServer(function (req, res) {

  var returnResponse = {
    statusCode: 0,
    contentType: "",
    content: "",
  };

  handleRoutes(req, function (error, result) {
    if (error) {
      returnResponse = error
      res.writeHead(returnResponse.statusCode, { "Content-Type": returnResponse.contentType });
    } else {
      returnResponse = result
      res.writeHead(returnResponse.statusCode, { "Content-Type": returnResponse.contentType });
    }

    res.write(returnResponse.content);
  });

  res.end();
});
server.listen(port, function (error, response) {
  console.log(`Your server has been started and your port number is ${port}`);
});
