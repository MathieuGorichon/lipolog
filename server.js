const azure = require('azure-storage');
const express = require('express');
const app = express();

const account = 'mgn'
const access_key = 'fWFWgqF9rQorp/iGlg05tRnV+8iHnbF8ANCGTDjFJxJSKIUMVzGEU9rq9GhGgZCy+m2+ubZxX1AbFEguIYX+YQ=='

app.get('/', (req, res) => res.send('Running'));

function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}

app.listen( normalizePort(process.env.PORT || '3000'), function () {
  console.log('Running on port ' + normalizePort(process.env.PORT || '3000'));
});
