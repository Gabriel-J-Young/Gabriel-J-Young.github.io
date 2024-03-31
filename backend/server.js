//im going to use express

const express = require('express');
const app = express();

const stravaRoute = require('./routes/api/strava');

app.use('/strava', stravaRoute);

//define a route
app.get('/', (req, res) => {
    res.send("<h1>this is an express server</h1>");
});

// listen on port
const port = process.env.PORT || 4000; // You can use environment variables for port configuration
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});