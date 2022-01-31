/* global context, dispatch */

import app from './app';
const server = require('express')()
import renderVueComponentToString from 'vue-server-renderer/basic';

server.get('*', (req, res) => {
    renderVueComponentToString(app, (err, html) => {
        if (err) {
            throw new Error(err);
        }
        res.send(`<div id="app">${html}</div>`)
    })

})

server.listen(8080)
