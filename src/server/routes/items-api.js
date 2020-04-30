const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /items'
    });
});

router.post('/', (req, res) => {
    res.status(201).json({
        message: 'Handling POST requests to /items'
    });
});

router.get('/:itemsId', (req, res) => {
    const id = req.param.itemid;
    if (id === 'special') {
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        })
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        })
    }
});

router.delete('/:itemsId', (req, res) => {
    res.status(200).json({
        message: 'Deleted Item'
    });
});

module.exports = router;