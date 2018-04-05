'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Coffee Bot' });
});

router.get('/terms', function (req, res) {
    res.render('terms', { title: 'Terms of Use' });
});

module.exports = router;
