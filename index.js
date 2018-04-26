const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const birds = require('./routes/birds');
const turtles = require('./routes/turtles');
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

app.use('/birds', birds);
app.use('/turtles', turtles);

// Not Found (404) handler
app.use((req, res, next) => {
  res.status(404);
  const error = new Error('Not Found. 🔍');
  next(error);
});

// Error handler
app.use((error, req, res, next) => {
  res.status(res.statusCode || 500);
  res.json({
    message: error.message,
    error: req.app.get('env') === 'development' ? err.stack : {}
  });
});

// Set the PORT to listen on
const port = process.env.PORT || 3000;
// Listen on the port
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

module.exports = app;
