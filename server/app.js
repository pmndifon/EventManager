import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import dotenv from 'dotenv';
import config from './api/config/config.json';
import datasource, { Users, Centers, Events } from './api/models';
import userRouter from './api/routes/userRouter';
import centerRouter from './api/routes/centerRouter';
import eventRouter from './api/routes/eventRouter';

const app = express();

// Middleware
app.use(logger('dev'));
app.set('json spaces', 4);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// PostgreSQL Database Models and Config
dotenv.config();
app.config = config;
app.datasource = datasource;

// Component Routers
userRouter(app, Users);
centerRouter(app, Centers);
eventRouter(app, Events);

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Event Manager Api. Please use .../api/v1/signup');
});

export default app;
