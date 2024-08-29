const mongoose = require('mongoose');

const Schema = mongoose.Schema
// Schema define the structure 
const saleItemSchema = new Schema({
    title: {
        type: String,
        required : true,
    },
    description: {
        type:String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    //image: {
    //type: 
    //},
}, {timestamps: true})

// Model apply the schema and we use model to interact with collction
module.export = mongoose.model('saleItem', saleItemSchema)