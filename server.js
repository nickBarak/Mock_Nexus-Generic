const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const express = require('express');
const port = process.env.PORT || 3000;

app.prepare().then(_=> {
    const server = express();
    server.use((req, res, next) => {
        if (req.protocol === 'http') {
            res.redirect(301, 'https://www.mocknexus.com');
            return
        } else next();
    });

    server.listen(port, console.log('Listening on port', port));
});