const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const port = process.env.PORT || 3000;
const express = require('express');

/* Redirect HTTP to HTTPS */
app.prepare().then(_=> {
    server.enable('trust proxy');
    const server = express();
    !dev && server.use( (req, res) => !req.secure && res.redirect('https://www.mocknexus.com') );
    server.listen(port, _=> console.log('Listening on port', port))
});