import express from 'express';

const app = express();

app.get('/', (_req, res) => {
  res.send('<h1>This is shawnkoon!</h1>');
});

app.listen(8080, () => {
  console.log('Server is now listening on http://localhost:8080 🚀');
});
