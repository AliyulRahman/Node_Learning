const { readFile } = require("../libs/fileReader");

exports.handleFileRoutes = (queryParams) => {
  return new Promise((resolve, reject) => {
    const fileName = queryParams?.fileName;

    if (!fileName) {
      return reject({
        content: "File name is required",
        contentType: "text/html",
        statusCode: 400,
      });
    }

    readFile(fileName, (error, result) => {
      if (error) {
        reject({
          content: "Error while reading files",
          contentType: "text/html",
          statusCode: 500,
        });
      } else {
        let fileContentType = fileName.includes(".json")
          ? "application/json"
          : "text/plain";

        resolve({
          content: result,
          contentType: fileContentType,
          statusCode: 200,
        });
      }
    });
  });
};