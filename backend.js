const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
app.use (express.static('build'));

app.listen(port, () => {
  console.log('Server started on port: ' + port);
});