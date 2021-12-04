const express = require('express');
const morgan = require('morgan');

const app = express();

const port = process.env.PORT || 5555;

const mangasRouter = require('./routes/mangasRouter');

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json({
    message: 'API is working.'
  });
});

app.use('/mangas', mangasRouter);

app.listen(port, () => {
  console.log('Listening on PORT', port);
});
