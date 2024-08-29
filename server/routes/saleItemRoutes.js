const express = require('express');
//const SaleItem = require('../models/saleItemsModel')
const {
    getItems,
    getOneItem,
    createItem,
    deleteItem,
    updateItem,
} = require('../controllers/saleItemController')
const router = express.Router();

// GET all sale Items 
router.get('/', getItems
// (req, res) => {
//     res.json({
//         mssg: 'get all sale items'
//     })
// }
);

// GET a single sale Item
router.get('/:id', getOneItem
//      (req, res)=> {
//     res.json({
//         mssg: 'get single item'
//     })
// }
);

// POST a new item
router.post('/', createItem)

    //testing the schema and model
    // const {title, description, price} = req.body

    // try {
    //     const saleItem = await  SaleItem.create(title, description, price)
    //     res.status(200).json(saleItem)
    // } catch (error) {
    //     res.status(400).json({error: error.message})
    // }
    // res.json({
    //     mssg: 'Post a new Item'
    // })
//});

// Delete an Item
router.delete('/:id', deleteItem
//     (req, res)=> {
//     res.json({
//         mssg: 'Delete an Item'
//     })
// }
);

// Udate an Item
router.patch('/:id', updateItem
//      (req, res) => {
//     res.json({
//         mssg: 'Update an item'
//     })
// }
);

module.exports = router