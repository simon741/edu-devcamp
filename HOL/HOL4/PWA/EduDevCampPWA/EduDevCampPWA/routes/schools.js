'use strict';
var express = require('express');
var router = express.Router();

/* GET schools page. */
router.get('/', function (req, res) {
    res.render('schools', { title: 'Edu DevCamp - Schools' });
});

module.exports = router;
