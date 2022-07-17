const express = require('express');
const router = express.Router();
// Bring in dotenv
require('dotenv').config();
// set variables for Twilio SID and token
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

// GET sms notification from Twilio
router.get('/', (req, res) => {
    sendTextMessage();
    res.send(`
    <div>
        <h1>My Twilio API test</h1>
        <h2>Message sent successfully.</h2>
    </div>`)
})

function sendTextMessage() {
    client.messages
        .create({
            body: 'Hi Caroline. An order has been placed on Sweet Surrender.',
            from: '+18573758075',
            to: '16123867919'
        })
        .then(message => console.log(message.sid))
        .catch(error => console.log(error))
}

module.exports = router;