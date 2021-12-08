const express = require('express');
const path = require('path');
const db = require('./config/connection');


const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());

app.use(require("./routes/"));

  // start server
  db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
});