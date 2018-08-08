const mongoose= require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    tags: {
        type: Array,
        default: []
    },
    category: {
        type: String,
        default: ""
    },
    account: {
        type: String,
        default: ""
    }

});

module.exports = Expense = mongoose.model('expense',ItemSchema);