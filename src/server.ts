import express from 'express';

import './database';

const app = express();

app.get('/', (req, res) => {
  return res.json({ message: 'Hello NLW 5' });
});

app.post('/', (req, res) => {
  return res.json({ message: 'User signed up' });
});

app.listen(3333, () => {
  console.log('Server is running on port 3333');
});
