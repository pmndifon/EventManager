import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import config from './api/config/config.json';
import datasource from './api/models/index';
import userRouter from './api/routes/userRouter';
import centerRouter from './api/routes/centerRouter';
import eventRouter from './api/routes/eventRouter';


const app = express();

// Middleware
app.set('json spaces', 4);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// PostgreSQL Database Models and Configd
app.config = config;
app.datasource = datasource;

// Data Models
const Users = app.datasource.Users;
const Centers = app.datasource.Centers;
const Events = app.datasource.Events;

// Component Routers
userRouter(app, Users);
centerRouter(app, Centers);
eventRouter(app, Events);


export default app;
