const { readFile } = require("../libs/fileReader");

exports.handleFileRoutes = (queryParams, callback) => {
  const fileName = queryParams?.fileName;
  readFile(property, function (error, result) {
    if (error) {
      callback(
        {
          content: "Error while reading files",
          contentType: "text/html",
          statusCode: 500,
        },
        null
      );
    } else {
      let fileCOntentType = fileName.includes(".json")
        ? "application/json"
        : "text/plain";
      callback(null, {
        content: result,
        contentType: fileCOntentType,
        statusCode: 200,
      });
    }
  });
};
