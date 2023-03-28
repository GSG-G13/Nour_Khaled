const express = require("express");
const path = require("path")
const app = express();
const PORT = 3003;

app.listen(PORT, () => {
  console.log(`hello Nour & Khaled localhost:${PORT}`);
});
