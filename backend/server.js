import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

let latestStatus = null;

app.post('/api/status', (req, res) => {
  const { statusCode } = req.body;
  latestStatus = statusCode;
  console.log('Received status:', statusCode);
  res.sendStatus(200);
});

app.get('/api', (req, res) => {
  res.json({ statusCode: latestStatus });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
