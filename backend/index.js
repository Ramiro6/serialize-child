const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.json({ name: 'ramiro' })
});


app.listen(3000, () => {
  console.log('app listening on port 3000')
});
