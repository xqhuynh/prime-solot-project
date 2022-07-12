const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// Add item to cart
router.post('/', (req, res) => {
    console.log('In POST to db');
    const sqlQuery = `INSERT INTO orders(product_id, user_id)
    VALUES ($1, $2) RETURNING*;`;
    sqlParams = [
        req.body.user_id,
        req.body.product_id
    ];

    pool.query(sqlQuery, sqlParams)
        .then((result) => {
            console.log('Post successful', result)
            res.sendStatus(201)
        })
        .catch((err) => {
            console.log('Error posting to cart', err);
        })
})

// Create Twilio client

const client = require('twilio')('ACd1dba4ade8696ddb77a63102d3452a8c', '102f93e17a1a70ba94817ab84ca76f98');

router.get('/success', (req, res) => {
    sendTextMessage();
    res.send(`
        <div>
            <h1>My Twilio API test</h1>
            <h2>Message sent successfully.</h2>
        </div>
    `)
})

function sendTextMessage() {
    client.messages
        .create({
            body: 'Hi Savon. Your order is being processed. Thank you and have a blessed day',
            from: '+18573758075',
            to: '16123867919'
        })
        .then(message => console.log(message.sid))
        .catch(error => console.log(error))
}

module.exports = router;