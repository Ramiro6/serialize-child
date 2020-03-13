const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/content/content');
const http = require('http');
// const cors = require('cors')
const app = express();
app.disable('x-powered-by');

// app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
    return res.status(200).json({});
  }
  next();
});


app.get('/api/content', (req, res) => {
  res.json(db.data)
});

app.get('/', (req, res) => {
  res.json({ name: 'ramiro' })
});

http.createServer(app).listen(3000, () => {
  console.log('app listening on port 3000')
});
