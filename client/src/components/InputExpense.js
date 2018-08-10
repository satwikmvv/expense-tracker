import React, { Component } from 'react';
import axios from 'axios';

class InputExpense extends Component {
    constructor(props){
        super(props);

        this.state={
            account:'',
            amount:'',
            category:'',
            taginput:'',
            date: '',
            tags:[]
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('api/expense',this.state)

        this.setState({
            account:'',
            amount:'',
            category:'',
            tags:[],
            taginput:'',
            date:''
        })
    }

    handleChange= (e) => {
        e.preventDefault();
        this.setState({
            [e.target.id]: e.target.value
        })
        
    }

    handleKeyPress=(e) => {
        (e.key === 'Enter')
        && (this.state.taginput)
        && (
            this.setState((prevState)=>{
                var dumtag=[...prevState.tags];
                !dumtag.includes(prevState.taginput) && dumtag.push(prevState.taginput);
                return {
                    tags: dumtag,
                    taginput: ''
                }
            })
        )
    }

    render() {
        return (
            <div className="inputForm">
                <div className="form-group">
                    <label htmlFor="account">Account/Card:</label>
                    <input type="text" id="account" className="form-control" value={this.state.account} placeholder="Account Name" onChange={this.handleChange.bind(this)} />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Amount:</label>
                    <input  type="text" id="amount" className="form-control" value={this.state.amount} placeholder="Amount" onChange={this.handleChange.bind(this)} />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" className="form-control" value={this.state.category} placeholder="Category" onChange={this.handleChange.bind(this)} />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input type="date" id="date" className="form-control" value={this.state.date} placeholder="date" onChange={this.handleChange.bind(this)} />
                </div>
                <div className="form-group">
                    <label htmlFor="taginput">Tags:</label>
                    <input type="text" id="taginput" className="form-control" value={this.state.taginput} placeholder="Tags" 
                        onChange={this.handleChange.bind(this)}
                        onKeyPress={this.handleKeyPress.bind(this)} 
                    />
                </div>
                
                
                <button onClick={this.handleSubmit.bind(this)}>Submit</button>
            </div>
        );
    }
}

export default InputExpense;