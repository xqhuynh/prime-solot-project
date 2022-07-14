const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
// Get all cake items
router.get('/', (req, res) => {
  // GET route code here
  console.log('/cake GET route');
  // Sql query
  const queryText = `SELECT * FROM product ORDER BY name ASC ;`;

  pool.query(queryText)
    .then((result) => {
      res.send(result.rows)
    })
    .catch((err) => {
      console.log('GET /cake error', err);
      res.sendStatus(500)
    })
});

// GET route to fetch single cake item for detail view
// Target id after endpoint, /cakes/:id
router.get('/:id', (req, res) => {
  console.log('/cake GET individual cake item');

  const queryText = `SELECT * FROM product WHERE product.id = $1;`;
  const sqlParams = [req.params.id];

  pool.query(queryText, sqlParams)
    .then((result) => {
      console.log('Result is', result.rows[0]);

      if (result.rows.length === 0) {
        console.log(`No cakes matches id ${req.params.id}`);
        res.sendStatus(404);
        return;
      }
      res.send(result.rows[0])
    })
    .catch((err) => {
      console.log('Get cake id failed', err);
    })
})

/**
 * POST route template
 */
// Add cart items to db
router.post('/', (req, res) => {

  const sqlQuery = `INSERT INTO "orders" (userId, productId)
                      VALUES ($1, $2) RETURNING*;`;
  // req.body is array of objects
  sqlParams = [
    req.user.id,
    req.body[0].id
  ]
  // console.log('req.user is:', req.user);
  console.log('POST req.body is:', req.body);
  pool.query(sqlQuery, sqlParams)
    .then((result) => {
      console.log('Post successful', result.rows[0])
    })
    .catch((err) => {
      console.log('Error posting to cart', err);
    })
});

// DELETE route, ability to delete item in admin view
// Target id, cakes/:id
router.delete('/:id', (req, res) => {
  console.log('DELETE inventory item Req.params is:', req.params);

  const sqlQuery = `DELETE FROM "product" WHERE id = $1;`;
  const sqlParams = [req.params.id];

  pool.query(sqlQuery, sqlParams)
    .then((result) => {
      console.log('DELETE inventory item successful', result);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('DELETE item failed', err);
      res.sendStatus(500);
    })
})

module.exports = router;

