const dotenv = require('dotenv')
dotenv.config();
const path = require('path');
const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb:3000//localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});


app.listen(PORT, function () {
  console.log(`Now listening on port: ${PORT}`);
});
