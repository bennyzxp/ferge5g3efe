const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Keep-alive server is running');
});

function startKeepAliveServer(port) {
  app.listen(port, () => {
    console.log(`Keep-alive server is running on port ${port}`);
  });
}

module.exports = { startKeepAliveServer };