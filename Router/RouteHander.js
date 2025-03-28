const url = require("url");
const { handleTextTransformRoutes } = require("./TextTransformRoute");
const { handleOsRoutes } = require("./osRoute");
const { handleFileRoutes } = require("./FileHandlerRoute");
const { handleEmployeeRoutes } = require("./employeeRoute");

exports.handleRoutes = (request, body) => {
  return new Promise((resolve, reject) => {
    const parsedUrl = url.parse(request.url, true);
    const queryParams = parsedUrl.query;

    let routeHandler;

    if (parsedUrl.pathname === "/fileReader") {
      routeHandler = handleFileRoutes(queryParams);
    } else if (parsedUrl.pathname === "/os") {
      routeHandler = handleOsRoutes(queryParams);
    } else if (parsedUrl.pathname === "/textTransform") {
      routeHandler = handleTextTransformRoutes(queryParams);
    } else if (parsedUrl.pathname.startsWith("/employee")) {
      routeHandler = handleEmployeeRoutes(parsedUrl, body);
    } else {
      return reject({
        content: "<h1>Page Not Found</h1>",
        contentType: "text/html",
        statusCode: 404,
      });
    }

    routeHandler
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
};
