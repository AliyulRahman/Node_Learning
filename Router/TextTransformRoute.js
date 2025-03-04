const { convertCase } = require("../libs/textTransform");

exports.handleTextTransformRoutes = (queryParams) => {
  return new Promise((resolve, reject) => {
    const inputText = queryParams?.inputText;
    const inputType = queryParams?.inputType;

    if (!inputText || !inputType) {
      return reject({
        content: "Both inputText and inputType are required",
        contentType: "text/html",
        statusCode: 400,
      });
    }

    convertCase(inputText, inputType, (error, result) => {
      if (error) {
        reject({
          content: "Error reading on Text Transform",
          contentType: "text/html",
          statusCode: 500,
        });
      } else {
        resolve({
          content: result,
          contentType: "text/plain",
          statusCode: 200,
        });
      }
    });
  });
};
