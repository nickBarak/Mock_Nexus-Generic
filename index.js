const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const port = process.env.PORT || 3000;
const express = require('express');
const { client } = require('./URLs');

app.prepare().then(_=> {
    const server = express();
    !dev && server.use( (req, res) => (req.protocol === 'http') && res.redirect(client) );
    server.listen(port, _=> console.log('Listening on port', port))
});