const express = require('express');
const app = express();
const sql = require('mssql/msnodesqlv8');
const cors = require('cors');

app.use(express.json());
app.use(cors());

const config = {
  server: '(localdb)\\LocalDBDemo',
  database: 'Demoapp',
  driver: 'msnodesqlv8',
  options: {
    trustedConnection: true,
  },
};

app.get('/getData', (req, res) => {
  sql.connect(config, function(err) {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'An error occurred while connecting to the database.' });
      return;
    }

    const request = new sql.Request();
    request.query('SELECT * FROM Users', function(err, records) {
      if (err) {
        console.log(err);
        res.status(500).json({ error: 'An error occurred while retrieving the data.' });
        return;
      }

      res.status(200).json(records.recordset);
    });
  });
});

app.post('/saveData', (req, res) => {
  const { EmailID, pwd } = req.body;

  sql.connect(config, function (err) {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'An error occurred while connecting to the database.' });
      return;
    }

    const request = new sql.Request();

   
    request.input('EMAIL_ID', sql.NVarChar, EmailID);
    request.input('pwd', sql.NVarChar, pwd);

  
    request.execute('InsertUser', function (err) {
      if (err) {
        console.log(err);
        res.status(500).json({ error: 'An error occurred while saving the data.' });
        return;
      }

      res.status(200).json({ message: 'Data saved successfully!' });
    });
  });
});


const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
