const path = require('path');

const basePath = path.join(__dirname, '../');

const PORT = process.env.PORT || 3000;

const express = require('express');

var app = express();

app.use(express.static(`${basePath}public`));

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});
