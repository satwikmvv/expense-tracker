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
        required:true
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
        default: "",
        required:true
    },
    ExpenseType: {
        type: String,
        default: "",
        required:true
    }
    

});

module.exports = Expense = mongoose.model('expense',ItemSchema);