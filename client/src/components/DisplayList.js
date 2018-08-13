import React, { Component } from 'react';
import axios from 'axios';

class DisplayList extends Component {
    constructor(props) {
        super(props);
        this.state={
            item:null
        }
    }
    
    componentDidMount() {
        axios
            .get('api/expense')
            .then(res=>this.setState({
                item:res.data
            }))
    }


    handleClick = (id) => {
        axios
            .delete(`api/expense/${id}`)
    }

    render() {
        return (
            <div>
                <table className="table table-hover table-striped table-bordered">
                    <thead className="thead-light">
                        <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Category</th>
                        <th scope="col">Account</th>
                        <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(this.state.item) && this.state.item.map(x=>(
                            <tr key={x._id}>
                                <td className={x.ExpenseType.toLowerCase()}>{new Date(x.date).toUTCString().substr(5,11)}</td>
                                <td className={x.ExpenseType.toLowerCase()} >${x.amount}</td>
                                <td className={x.ExpenseType.toLowerCase()}>{x.category}</td>
                                <td className={x.ExpenseType.toLowerCase()}>{x.account}</td>
                                <td className={x.ExpenseType.toLowerCase()}><button onClick={this.handleClick.bind(this,x._id)}>&times;</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
            </div>
        );
    }
}

export default DisplayList;