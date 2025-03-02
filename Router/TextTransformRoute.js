const { convertCase } = require("../libs/textTransform");

exports.handleTextTransformRoutes = (queryParams, callback) => {
  const inputText = queryParams?.inputText;
  const inputType = queryParams?.inputType;

  convertCase(inputText, inputType, function (error, result) {
    if (error) {
      callback(
        {
          content: "Error reading on Text Transform",
          contentType: "text/html",
          statusCode: 500,
        },
        null
      );
    } else {
      callback(null, {
        content: result,
        contentType: "text/plain",
        statusCode: 200,
      });
    }
  });
};
