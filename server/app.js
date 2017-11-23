import express from 'express';


const app = express();


app.route('/venues')
  .get((req, res) => {
    res.json([{
      id: 1,
      name:'Default Venue'
    }]);
  });
  

export default app;