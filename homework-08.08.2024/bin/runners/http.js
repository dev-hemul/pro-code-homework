import http from 'http';
import server from "../../http/server.js";

export default function startServer() {
  const httpServer = http.createServer(server);
  const PORT = 8080;

  httpServer.listen(PORT, () => {
    console.log(`HTTP Server is running on port ${PORT}`);
  });
}