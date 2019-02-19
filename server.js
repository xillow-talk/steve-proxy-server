const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
const port = 9000;

app.use(morgan('dev'));
console.log(__dirname);
app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Proxy Server running at port ${port}`)
});