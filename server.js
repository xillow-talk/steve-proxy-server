const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
const port = 9000;

app.use(morgan('dev'));
console.log(__dirname);
app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/:houseId', (req, res) => {
  // let houseId = req.params.houseId;

  res.sendFile(path.resolve(__dirname + '/public/index.html'));
});
app.listen(port, () => {
  console.log(`Proxy Server running at port ${port}`)
});