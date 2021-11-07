const express = require('express');
const app = express();
app.use(express.static('./dist/pfreco2'));
app.get('/*', (req, res) =>
 res.sendFile('index.html', {root: 'dist/pfreco2/'}),
);
app.listen(process.env.PORT || 8080);