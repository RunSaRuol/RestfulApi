const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const OrdersController = require('../controllers/orders');

router.get('/',checkAuth,OrdersController.orders_get_all );

router.post('/', checkAuth,OrdersController.orders_post);

router.get('/:orderId', checkAuth,OrdersController.find_by_id);

router.patch('/:orderId', checkAuth,OrdersController.update_order);
router.delete('/:orderId',OrdersController.delete_order);
module.exports = router;