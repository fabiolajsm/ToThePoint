// /**
//  * Required External Modules
//  */
//  const express = require("express");
//  const path = require("path");

// /**
//  * App Variables
//  */
//  const app = express();
//  const port = process.env.PORT || "3000";


// /**
//  *  App Configuration
//  */



// /**
//  * Routes Definitions
//  */
//  app.get("/", (req, res) => {
//     res.status(200).send("WHATABYTE: Food For Devs");
//   });

// /**
//  * Server Activation
//  */
//  app.listen(port, () => {
//     console.log(`Listening to requests on http://localhost:${port}`);
//   });
//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
// const socket_server = require("./socket_src/socket_server.js");

conn.sync({ force: false }).then(() => {
  const expressServer = server.listen(process.env.PORT || 3001, async () => {
    console.log("%s listening at 3001");
  });
//   socket_server(expressServer);
});