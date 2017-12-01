import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import config from './api/config/config.json';
import datasource from './api/models/index';
import centerRouter from './api/routes/centerRouter';

const app = express();
app.use(logger('dev'));
app.config = config;
app.datasource = datasource;
app.set('json spaces', 4);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const Centers = app.datasource.Centers;
centerRouter(app, Centers);


export default app;
