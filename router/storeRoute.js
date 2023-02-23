var exports = require('express');
var router = exports.Router();
var storeController = require('../controller/storeController');


router.get('/store',storeController.getStoreList);
router.post('/store/save',storeController.saveStore);
router.put('/store/update',storeController.updateStore);
router.delete('/store/delete/:storeId',storeController.deleteStore);

module.exports = router;