const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const port = process.env.PORT || 3000;
const express = require('express');

app.prepare().then(_=> {
    const server = express();
    !dev && server.use( (req, res) => (req.protocol === 'http') && res.redirect('https://www.mocknexus.com') );
    server.listen(port, _=> console.log('Listening on port', port))
});