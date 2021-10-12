const server = require("./src/app.js");
const { conn } = require("./src/db.js");
// const socket_server = require("./socket_src/socket_server.js");

conn.sync({ force: true }).then(() => {
  const expressServer = server.listen(process.env.PORT || 3001, async () => {
    console.log("%s listening at 3001");
  });
//   socket_server(expressServer);
});