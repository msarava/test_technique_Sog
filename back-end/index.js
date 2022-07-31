require('dotenv').config();

const app = require('./src/app');

const port = parseInt(process.env.PORT ?? '5000', 10);

app.listen(process.env.PORT|| '5000', (err) => {
  if (err) {
    console.error('Something bad happened');
  } else {
    console.warn(`Server is listening on ${port}`);
  }
});
