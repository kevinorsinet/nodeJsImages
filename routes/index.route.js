const express = require("express")
,     router = express.Router()
,     indexController = require('../controllers/index.controller')
,     multer  = require('multer')
,     upload = multer({ dest: 'public/uploads/' });

router.get('/ajouterProduit', indexController.getAddProduct);
router.post('/ajouterProduit', upload.single('image'), indexController.postAddProduct);
router.get('/', indexController.getIndexPage);


module.exports = router;