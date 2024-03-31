// routes/strava.js

const express = require('express');
const router = express.Router();

//define routes

router.get('/', (req, res) => {
    res.send('root strava route');
});

//see https://stackoverflow.com/questions/43007961/how-to-pass-a-url-as-a-url-parameter-in-express
router.get('/query/*', (req, res) => {
    let url = req.params[0];
    res.send('root strava route');
});

// export the router module so that server.js file can use it
module.exports = router;