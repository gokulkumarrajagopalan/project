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
      res.status(500).send('Error connecting to the database');
      return;
    }

    const request = new sql.Request();
    request.query('SELECT * FROM mas_title', (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error executing the query');
        return;
      }

      res.json(data.recordsets[0]);
    });
  });
});

module.exports = router;

