const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

app.use('/api',appRoutes);

app.listen(port, () => {
    console.log(`Server is started on port ${port}..!`);
});
