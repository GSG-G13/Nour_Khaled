const { app, PORT } = require('./app');

app.listen(PORT, () => {
    console.log(`The server is running on http://localhost:${PORT}`);
  });