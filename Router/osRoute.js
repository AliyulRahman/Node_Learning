const { getOSProperties } = require("../libs/osProperties");

exports.handleOsRoutes = (queryParams, callback) => {
  const property = queryParams?.property;

  getOSProperties(property, function (error, result) {
    if (error) {
      callback(
        {
          content: "Error reading OS Properties",
          contentType: "text/html",
          statusCode: 500,
        },
        null
      );
    } else {
      callback(null, {
        content: `Your Machine's OS ${property} : ${result}`,
        contentType: "text/plain",
        statusCode: 200,
      });
    }
  });
};
