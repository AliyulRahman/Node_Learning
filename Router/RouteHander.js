const url = require("url");
const { handleTextTransformRoutes } = require("./TextTransformRoute");
const { handleOsRoutes } = require("./osRoute");
const { handleFileRoutes } = require("./FileHandlerRoute");

exports.handleRoutes = (request, callback) => {
  const parsedUrl = url.parse(request.url, true);
  const queryParams = parsedUrl.query;

  // Read file
  if (parsedUrl.pathname == "/fileReader") {
    handleFileRoutes(queryParams, function (error, result) {
      if (error) callback(error, null);
      else callback(null, result);
    });
  }
  // Get OS details
  else if (parsedUrl.pathname == "/os") {
    handleOsRoutes(queryParams, function (error, result) {
      if (error) callback(error, null);
      else callback(null, result);
    });
    // Text Transform
  } else if (parsedUrl.pathname == "/textTransform") {
    handleTextTransformRoutes(queryParams, function (error, result) {
      if (error) callback(error, null);
      else callback(null, result);
    });
    //Page not found
  } else {
    callback(
      {
        content: "<h1>Page Not Found</h1>",
        contentType: "text/html",
        statusCode: 404,
      },
      null
    );
  }
};
