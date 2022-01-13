const { Router } = require('express');
const { 
    getAllItems, 
    getOneItem, 
    addItem,
    updateOneItem,
    removeItem
        } = require('../controllers/travelControllers');
const router = Router();

router.get('/', getAllItems);
router.get('/:id', getOneItem);
router.post('/add', addItem);
router.put('/:id', updateOneItem);
router.delete('/:id', removeItem);

module.exports = router;