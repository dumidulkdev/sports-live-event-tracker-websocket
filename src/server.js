import express from 'express';

const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express server!' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
