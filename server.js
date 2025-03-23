const http = require("http");
const { handleRoutes } = require("./Router/RouteHander");

const port = 8000;

const server = http.createServer(async (req, res) => {
  try {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", async () => {
      try {
        const result = await handleRoutes(req, body ? JSON.parse(body) : null);
        res.writeHead(result.statusCode, { "Content-Type": result.contentType });
        res.write(result.content);
      } catch (error) {
        res.writeHead(error.statusCode || 500, { "Content-Type": error.contentType || "text/html" });
        res.write(error.content || "Internal Server Error");
      } finally {
        res.end();
      }
    });
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/html" });
    res.write("Internal Server Error");
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
