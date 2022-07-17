const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// GET route to fetch all orders to display on admin page 
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

// DELETE route to delete specific order item
router.delete('/:id', (req, res) => {
    console.log('DELETE order item Req.params is:', req.params);

    const sqlQuery = `DELETE FROM "orders" WHERE productId = $1;`;
    const sqlParams = [req.params.id];

    pool.query(sqlQuery, sqlParams)
        .then((result) => {
            console.log('DELETE order item successful');
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('DELETE order item failed', err);
            res.sendStatus(500);
        })
})

// POST route to add all cart items to db

router.post('/', (req, res) => {
    // console.log('POST req.body is:', req.body);
    // console.log('req.user is:', req.user);
    let size = Object.keys(req.body).length;

    // Loop through query and increase 'req.body ++' each time
    for (let i = 0; i < size; i++) {
        const sqlQuery = `INSERT INTO "orders" (userId, productId)
                          VALUES ($1, $2) RETURNING*;`;

        // req.body is array of objects
        // set req.body index to i such as 'req.body[i]
        sqlParams = [
            req.user.id,
            req.body[i].id
        ]
        pool.query(sqlQuery, sqlParams)
            .then((result) => {
                console.log('Post successful', result.rows[0])
                // Increment req.body[0].id by 1 => 'req.body[0].id ++' after each loop
                req.body[0].id++;
            })
            .catch((err) => {
                console.log('Error posting to cart', err);
            })
    }
});

module.exports = router;