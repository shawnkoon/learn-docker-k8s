import express from 'express';
import redis from 'redis';
import process from 'process';

const app = express();
const redisClient = redis.createClient({
  host: 'redis-server', // Comes from docker-compose service name.
  port: 6379
});

redisClient.set('visits', '0');

app.get('/', (_req, res) => {
  process.exit(1);
  redisClient.get('visits', (_err, visits) => {
    res.send(`<h2>Wow! we've visited this site for ${visits} times</h2>`)
    redisClient.set('visits', `${parseInt(visits) + 1}`);
  });
})


app.listen(3000, () => {
  console.log(`Server is running at http://localhost:3000 🚀`);
});
