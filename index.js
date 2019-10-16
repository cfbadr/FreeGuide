const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const db = require('./config/db.js')
const app = express();

// connect to mongoDB
mongoose
  .connect(db.mongoURI)
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch(err => {
    console.log(err);
    console.log('\x1b[31m\x1b[1m MongoDB Not Connected');
  });

const hostname = '127.0.0.1';
const port = 3000;

app.get('/',(req,res)=>{
    res.status(200).send('Server running : FreeGuide\n');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/ -boussa foum if you love baby`);
});
