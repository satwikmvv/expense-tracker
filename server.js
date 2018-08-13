const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expenseItems=require('./routes/api/expense');


const app = express();

app.use(bodyParser.json());


mongoose
    .connect('mongodb://satwik:satwik123@ds215822.mlab.com:15822/expense-tracker', { useNewUrlParser: true })
    .then(()=>console.log('MongoDB Connected ...'))
    .catch(err=> console.log(err)); 

app.use('/api/expense',expenseItems);

if(process.env.NODE_ENV === 'production') {
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*',(req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server started on port ${port}`));