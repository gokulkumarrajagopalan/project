const express = require('express');
const router = express.Router();
const sql = require('mssql/msnodesqlv8');

const config = {
  server: '(localdb)\\LocalDBDemo',
  database: 'Demoapp',
  driver: 'msnodesqlv8',
  options: {
    trustedConnection: true,
  },
};

router.get('/', (req, res) => {
  sql.connect(config, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error connecting to database');
      return;
    }

    const request = new sql.Request();
    request.query('SELECT * FROM users', (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error executing query');
        return;
      }
      
      res.json(data.recordsets); // Return all the recordsets
    });
  });
});

module.exports = router;
