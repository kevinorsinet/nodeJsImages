const express = require("express")
,     router = express.Router()
,     indexController = require('../controllers/index.controller');

router.get('/', indexController.getIndexPage);
router.get('/ajouterProduit', indexController.getAddProduct);


module.exports = router;