import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import router from './api/routes/centers';

// Initialize http server
const app = express();

// Formats JSON
app.set("json spaces", 4);

// Parse requests of content-type - application/json, content-type - application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use v1 as prefix for all API endpoints
app.use('/', router);
app.use('/centers', router);

app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
}));


export default app;