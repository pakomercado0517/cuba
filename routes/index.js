var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Disfruta de la verdadera experiencia en Cuba, solo con nosotros' });
});

router.get('/reservation', (req,res) => {
  res.render('reservation')
})
router.get('/packs', (req,res) => {
  res.render('packs')
})

module.exports = router;
