import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import config from './api/config/config';
import datasource from './api/models/index';

// Initialize http server
const app = express();

app.config = config;
app.datasource = datasource;

app.set("json spaces", 4); // Formats JSON

// Parse requests of content-type - application/json, content-type - application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


// Use v1 as prefix for all API endpoints here
const Centers = app.datasource.Centers;

app.route('/centers')
  .get((req, res) => {
    Centers.findAll({})
      .then(result => res.json(result))
      .catch(err => res.status(412));
  })
  .post((req, res) => {
    Centers.create(req.body)
      .then(result => res.json(result))
      .catch(err => res.status(412));
  });

app.route('/centers/:id')
  .get((req, res) => {
    Centers.findOne({
        where: req.params
      })
      .then(result => res.json(result))
      .catch(err => res.status(412));
  })
  .put((req, res) => {
    Centers.update(req.body, {where: req.params})
      .then(result => res.json(result))
      .catch(err => res.status(412));
  })
  .delete((req, res) => {
    Centers.destroy({where: req.params})
      .then(result => res.sendStatus(204))
      .catch(err => res.status(err));
  });



export default app;