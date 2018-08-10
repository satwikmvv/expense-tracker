const express= require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/Item');

// @route   GET api/items
// @desc    GET one items
// @access  Public
router.get('/:id',(req, res) =>{
    Item.findById(req.params.id)
    .then(item=> res.json(item))
});
// @route   GET api/items
// @desc    GET All items
// @access  Public
router.get('/',(req, res) =>{
    Item.find()
        .sort({ date:-1})
        .then(items => res.json(items));
});

// @route   POST api/items
// @desc    Create A Post
// @access  Public
router.post('/',(req, res) =>{
    const newItem = new Item({
        amount: req.body.amount,
        account: req.body.account,
        category: req.body.category,
        tags: req.body.tags,
        date: new Date(req.body.date)
    });

    newItem.save().then(item=>res.json(item));
});

// @route   DELETE api/items
// @desc    Delete A Post
// @access  Public
router.delete('/:id',(req, res) =>{
   Item.findById(req.params.id)
    .then(item=> item.remove().then(()=>res.json({success:true})))
    .catch(err=>res.status(404).json({success:false}))
});

module.exports = router;