const express = require("express")
,     router = express.Router()
,     indexController = require('../controllers/index.controller');

router.get('/ajouterProduit', indexController.getAddProduct);
router.post('/ajouterProduit', indexController.postAddProduct);
router.get('/', indexController.getIndexPage);


module.exports = router;