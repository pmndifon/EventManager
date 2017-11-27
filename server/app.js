import express from 'express';
import bodyParser from 'body-parser';
import router from "./api/routes/routes";

// Initialize http server
const app = express();

// Formats JSON
app.set("json spaces", 4);  

// Assigns port
app.set('port', process.env.PORT || 3000);

// Parse requests of content-type - application/json, content-type - application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use v1 as prefix for all API endpoints
app.use('/api/v1', router);

export default app;