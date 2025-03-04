const { getOSProperties } = require("../libs/osProperties");

exports.handleOsRoutes = (queryParams) => {
  return new Promise((resolve, reject) => {
    const property = queryParams?.property;

    if (!property) {
      return reject({
        content: "OS property is required",
        contentType: "text/html",
        statusCode: 400,
      });
    }

    getOSProperties(property, (error, result) => {
      if (error) {
        reject({
          content: "Error reading OS Properties",
          contentType: "text/html",
          statusCode: 500,
        });
      } else {
        resolve({
          content: `Your Machine's OS ${property} : ${result}`,
          contentType: "text/plain",
          statusCode: 200,
        });
      }
    });
  });
};
