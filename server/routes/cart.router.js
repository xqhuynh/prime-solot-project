const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// Add item to cart
router.post('/', rejectUnauthenticated, (req, res) => {
    const sqlQuery = `INSERT INTO orders (product_id, quantity, user_id)
                        VALUES ($1, $2, $3);`;
    sqlParams = [
        req.body.product_id,
        req.body.quantity,
        req.body.user_id
    ];

    pool.query(sqlQuery, sqlParams)
        .then((result) => {
            console.log('Post successful', result)
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('Error posting to cart', err);
        })
})

module.exports = router;