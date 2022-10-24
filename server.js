const app = require('./src/app');
const mongoose = require('mongoose');
require('dotenv').config();

const { DB_HOST } = process.env;
const PORT = 3001;

mongoose
  .connect('mongodb+srv://valeri:8itBxyOWnNgSHM2o@cluster0.2665ccp.mongodb.net/superheroes?retryWrites=true&w=majority')
  .then(() =>
    app.listen(3001, () => {
      console.log(`Database connection successful on port ${PORT}`);
    })
  )
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
