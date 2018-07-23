'use strict';
var express = require('express');
var router = express.Router();

/* GET classes page. */
router.get('/', function (req, res) {
    res.render('classes', { title: 'Edu DevCamp - Classes' });
});

module.exports = router;
