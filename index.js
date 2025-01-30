const express = require("express");

const config = require(`./src/config/config.js`);
const routes = require("./src/routes/index.js")
const app = express();

app.use(express.json());
app.use('/', routes);

app.listen(config?.PORT, () => {
  console.log(`Listening on port number ${config?.PORT}`);
});
