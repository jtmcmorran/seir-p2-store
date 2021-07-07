const express = require('express');
const router = express.Router();
const viewController = require('./viewController');
const dataController = require('./datacontroller');
router.get('/', dataController.index,viewController.index)
router.delete('/:id', dataController.destroy, viewController.reHome)
router.put('/:id', dataController.update, viewController.reShow)
router.put('/:id/buy', dataController.buy, viewController.reShow)
router.post('/', dataController.create, viewController.reHome)
router.get('/:id/edit', dataController.show, viewController.edit)
router.get('/:id', dataController.show, viewController.show)

module.exports=router;
