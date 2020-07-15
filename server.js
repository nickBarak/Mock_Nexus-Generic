const express = require('express');
const next = require('next');
require('dotenv').config();
const app = next({ dev: !process.env.IN_PRODUCTION });

app
    .prepare()
    .then(_=> {
        const server = express();
        server.get('/', (req, res) => res.send('Server running'));
        server.get('*', (req, res) => app.getRequestHandler(req, res));

        server.listen(process.env.PORT, console.log('Listening on port', process.env.PORT));
    })
    .catch(e => console.log(e) || process.exit(1));
