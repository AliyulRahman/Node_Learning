var http = require("http");
const url = require("url");
const { convertCase } = require("./libs/textTransform");
const { getOSProperties } = require("./libs/osProperties");
const { readFile } = require("./libs/fileReader");
const port = 8000;

var server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });

  const parsedUrl = url.parse(req.url, true);
  const queryParams = parsedUrl.query;
  // Read file
  if (parsedUrl.pathname == "/fileReader") {
    const fileName = queryParams?.fileName;
    readFile(fileName, function (error, result) {
      if (error) {
        res.write(error);
      } else {
        console.log(result);
        res.write(result);
      }
    });
  }
  // Get OS details
  else if (parsedUrl.pathname == "/os") {
    const property = queryParams?.property;

    getOSProperties(property, function (error, result) {
      if (error) {
        res.write(error);
      } else res.write(`Your Machine's OS ${property} : ${result}`);
    });
    // Text Transform
  } else if (parsedUrl.pathname == "/textTransform") {
    const inputText = queryParams?.inputText;
    const inputType = queryParams?.inputType;

    convertCase(inputText, inputType, function (error, result) {
      if (error) {
        res.write(error);
      } else res.write(result);
    });
  } else {
    res.write("Page Not Found");
  }
  res.end();
});
server.listen(port, function (error, response) {
  console.log(`Your server has been started and your port number is ${port}`);
});
