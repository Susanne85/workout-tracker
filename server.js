const dotenv = require('dotenv')
dotenv.config();
const path = require('path');
const express = require('express');
//const routes = require('./routes');

const mongoose = require('mongoose');
 
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//app.use(routes);
app.use(require('./routes/api'));

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true
});

app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});
