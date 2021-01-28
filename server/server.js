const express = require('express');
const cors = require('cors');
const path = require('path');
const port = 3000;

const app = express();
app.use(cors());
app.use(express.static(path.resolve('public')));

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});