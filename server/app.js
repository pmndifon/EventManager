import express from 'express';


const app = express();


app.get('/', (req, res) => {
  res.json({
    response: 'API Works'
  });
});


export default app;