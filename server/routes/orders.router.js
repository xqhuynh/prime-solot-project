const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// GET router to fetch all orders to display on admin page 
router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('/orders GET route');
    // Sql query, join tables and select columns do display
    // productId, name, price
    const queryText = `SELECT product.id, name, price
	                    FROM product 
	                    JOIN orders
	                    ON product.id = orders.productid;`;

    pool.query(queryText)
        .then((result) => {
            res.send(result.rows)
        })
        .catch((err) => {
            console.log('GET /orders/error', err);
        })
})

module.exports = router;