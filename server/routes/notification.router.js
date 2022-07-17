const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const client = require('twilio')('ACd1dba4ade8696ddb77a63102d3452a8c', 'f02d3e7bacb43f7609f0f262b2e1489d');

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
            body: 'An order has been placed on Sweet Surrender.',
            from: '+18573758075',
            to: '16123867919'
        })
        .then(message => console.log(message.sid))
        .catch(error => console.log(error))
}

module.exports = router;