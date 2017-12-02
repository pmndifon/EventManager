import app from './app';


// Assigns port
const port = process.env.PORT || 3000;


app.listen(port, () => `Listening! on port ${port}`);
