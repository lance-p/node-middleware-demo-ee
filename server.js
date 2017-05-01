const express = require('express'),
    app = express(),
    port = 3000,
    requestId = require('./requestId');

// 'middleware' a function passed in to make modifications
app.use(requestId);

app.get('/', (req, res) => {
    res.send('\n new request id from middleware on each request: ' + res.id + '\n same id for each req: ' + res.sameId);
});

app.listen(port);
console.log(`app listening on port ${3000}`);