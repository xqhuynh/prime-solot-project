const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

// Create Twilio client
const client = require('twilio')('ACd1dba4ade8696ddb77a63102d3452a8c', '102f93e17a1a70ba94817ab84ca76f98');

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const cakeRouter = require('./routes/cakes.router');
const cartRouter = require('./routes/cart.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/cakes', cakeRouter);
app.use('/api/cart', cartRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});


// Twilio api test
app.get('/', (req, res) => {
  sendTextMessage();
  res.send(`
      <div>
          <h1>Your order has been placed successfully.</h1>
          <h2>You will receive an email confirmation shortly.</h2>
          <h2>Thank you for your order!</h2>
      </div>
  `)
})

function sendTextMessage() {
  client.messages
    .create({
      body: 'An order for the Crying Cake has been placed by Savon to match his mood',
      from: '+18573758075',
      to: '16123867919'
    })
    .then(message => console.log(message.sid))
    .catch(error => console.log(error))
}