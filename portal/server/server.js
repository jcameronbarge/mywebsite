const path = require('path');
const express = require('express');

const init = () => {
  const app = express();

  const public_path = path.join(__dirname, "../public");
  const html_file = path.join(public_path, "index.html");

  app.use(express.static(public_path));

  app.get('*', (req, res) => {
    res.sendFile(html_file);
  });

  const port = 8080;
  app.listen(port);
};
module.exports.init = init;
