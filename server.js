const next = require('next');
const express = require('express');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

app.prepare().then(() => {
  const server = express();

  server.use(function (req, res, next) {
    if (req.header('x-forwarded-proto') === 'http') {
      res.redirect(301, 'https://' + req.hostname + req.url);
      return
    }
    next()
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});