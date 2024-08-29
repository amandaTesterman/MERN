const SaleItem = require('../models/saleItemsModel')
const mongoose = require('monggosse')

// Get all items
const getItems = async (req, res ) => {
    const allSaleItems = await SaleItem.find({}).sort({createdAt: -1})
        //should be saleItem here?  
    res.status(200).json(allSaleItems)
}

// Get a single item
const getOneItem = async (req, res) => {
    //we have to make sure the id is a monggose type of id
    const {id} = req.params
    //before we run th function we need to make sure id is mongoose valid
    if(!mongoose.Types.ObjectId.IsValid(id)) {
        return res.status(404).json({error: "No such item in exsistance"})
    }

    const oneItem = await SaleItem.findById(id)

    if(!oneItem){
        return req.status(404).json({error: "This item does not exist"})
    }

    res.status(200).json(oneItem)
}

// Creaate new item
const createItem = async (req, res) =>{
    const {title, description, price} = req.body

    try {
        const saleItem = await  SaleItem.create(title, description, price)
        res.status(200).json(saleItem)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Delete an item
const deleteItem = async (req, res) =>{
    // need to be able to grab th specific item, use id 
    const {id} = req.params
    // need to make sure it is a valid id
    if(!mongoose.Types.ObjectId.IsValid(id)) {
        return res.status(404).json({error: "No such item in exsistance"})
    }
    // saleIitem or SaleItem??? Exporting saleItem in schema and models file?????
    // in mongo DB id is _id the key and the value is the id vaariable we creted
    const oneItem = await SaleItem.findOneAndDelete({_id: id})

    // we need to make sure there is even a workout to delete in the db
    if(!oneItem){
        return req.status(404).json({error: "This item does not exist"})
    }
    res.status(200).json(oneItem)
}

// Updste an item

const updateItem = async (req, res) =>{
     // need to be able to grab th specific item, use id 
     const {id} = req.params
     // need to make sure it is a valid id
     if(!mongoose.Types.ObjectId.IsValid(id)) {
         return res.status(404).json({error: "No such item in exsistance"})
     }
          // saleIitem or SaleItem??? Exporting saleItem in schema and models file?????
     const oneItem = await SVGRadialGradientElement.findOneAndaUpdate({_id: id}, {
        //spread function --study up

        //whatever properties are in the body we will update
        ...req.body
     })

      // we need to make sure there is even a workout to delete in the db
    if(!oneItem){
        return req.status(404).json({error: "This item does not exist"})
    }
    res.status(200).json(oneItem)
}

module.exports = {
    getItems,
    getOneItem,
    createItem,
    deleteItem,
    updateItem
}