import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World. This is shawnkoon!');
});

app.listen(8080, () => {
  console.log('Server is now listening on http://localhost:8080 🚀');
});
