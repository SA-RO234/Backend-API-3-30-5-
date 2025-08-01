const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");

const middleware = jsonServer.defaults();

server.use(middleware);
server.use(router);


server.listen(8000, () => {
  console.log("http://localhost:" + 8000);
});
