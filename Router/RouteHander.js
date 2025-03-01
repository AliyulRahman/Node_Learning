const url = require("url");
const { convertCase } = require("../libs/textTransform");
const { getOSProperties } = require("../libs/osProperties");
const { readFile } = require("../libs/fileReader");

exports.handleRoutes = (request, callback) => {
  const parsedUrl = url.parse(request.url, true);
  const queryParams = parsedUrl.query;

  var returnResponse = {
    statusCode: 0,
    contentType: "",
    content: "",
  };

  function setReturnResponse(statusCode,contentType,content) {
    returnResponse.statusCode=statusCode
    returnResponse.contentType=contentType
    returnResponse.content=content
  }

  // Read file
  if (parsedUrl.pathname == "/fileReader") {
    const fileName = queryParams?.fileName;
    readFile(fileName, function (error, result) {

      if (error) {
        setReturnResponse(500,"text/html",'Error Occured while reading files')
        callback(returnResponse, null);
      } else {
        let fileCOntentType = fileName.includes(".json") ? 'application/json': 'text/plain'
        setReturnResponse(200,fileCOntentType,result)
        callback(null, returnResponse);
      }
    });
  }
  // Get OS details
  else if (parsedUrl.pathname == "/os") {
    const property = queryParams?.property;

    getOSProperties(property, function (error, result) {
      if (error) {
        setReturnResponse(500,"text/html",'Error Occured while reading OS Properties')
        callback(returnResponse, null);
      } else {
        setReturnResponse(200,"text/plain",`Your Machine's OS ${property} : ${result}`)
        callback(null, returnResponse);
      }
    });
    // Text Transform
  } else if (parsedUrl.pathname == "/textTransform") {
    const inputText = queryParams?.inputText;
    const inputType = queryParams?.inputType;

    convertCase(inputText, inputType, function (error, result) {
      if (error) {
        setReturnResponse(500,"text/html",'Error Occured on Text Transform')
        callback(returnResponse, null);
      } else {
        setReturnResponse(200,"text/plain",result)
        callback(null, returnResponse);
      }
    });
//Page not found
  } else {
    setReturnResponse(404,"text/html",'<h1>Page Not Found</h1>')
    callback(returnResponse, null);
  }
};
