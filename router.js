const Router = require('express');
const router = new Router();
const serviceController = require('./controller');

router.post('/create', serviceController.create);
router.get('/read', serviceController.read);
router.put('/update', serviceController.update);
router.post('/delete', serviceController.delete);

module.exports = router