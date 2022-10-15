const http = require("http");
const PORT = process.env.PORT ?? 3000;
const albums = require("./albums.json");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res
      .writeHead(200, "ok", { "content-Type": "text/plain; charset=utf-8" })
      .end("Hello Node.js Http.server");
  }

  if (req.url === "/api/albums") {
    res
      .writeHead(200, "ok", {
        "content-Type": "application/json; charset=utf-8",
      })
      .end(JSON.stringify(albums));
  }
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT} 서버 구동 중...`);
});
