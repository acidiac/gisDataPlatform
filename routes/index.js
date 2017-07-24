var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/addData', (req, res, next) => {
    // The router function handle the rendering of the main data adding webpage
    res.render('addData', { title: 'add Data' });
});

module.exports = router;