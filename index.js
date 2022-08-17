const http = require("http");

const port = process.env.PORT || 8000;

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "text/plain");
  res.writeHead(200);
  res.end("Hello World");
};

const server = http.createServer(requestListener);
server.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
