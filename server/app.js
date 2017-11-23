import express from 'express';

const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.json({
    response: 'API Works'
  })
});

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});

