var express = require('express');
var router = express.Router();

/* GET bio page. */
router.get('/', function(req, res, next) {
  res.render('bio', { title: 'matt gottsacker' });
});

module.exports = router;
