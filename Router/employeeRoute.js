const employeeService = require("../services/employeeService");

async function handleEmployeeRoutes(parsedUrl, body) {
  const queryParams = parsedUrl.query;
  const path = parsedUrl.pathname;

  try {
    if (path === "/employee/add" && body) {
      const result = await employeeService.insertEmployees([body]);
      return { content: JSON.stringify(result), contentType: "application/json", statusCode: 200 };
    } 
    else if (path === "/employee/list") {
      const employees = await employeeService.getEmployees(queryParams);
      return { content: JSON.stringify(employees), contentType: "application/json", statusCode: 200 };
    } 
    else if (path === "/employee/update" && body) {
      const filter = { name: body.name };
      const update = { $set: body };
      const result = await employeeService.updateEmployee(filter, update);
      return { content: JSON.stringify(result), contentType: "application/json", statusCode: 200 };
    } 
    else if (path === "/employee/delete" && body) {
      const result = await employeeService.deleteEmployee({ name: body.name });
      return { content: JSON.stringify(result), contentType: "application/json", statusCode: 200 };
    } 
    else if (path === "/employee/drop") {
      const result = await employeeService.dropCollection();
      return { content: JSON.stringify(result), contentType: "application/json", statusCode: 200 };
    } 
    else {
      return { content: "<h1>Invalid Employee Route</h1>", contentType: "text/html", statusCode: 404 };
    }
  } catch (error) {
    return { content: JSON.stringify({ error: error.message }), contentType: "application/json", statusCode: 500 };
  }
}

module.exports = { handleEmployeeRoutes };
