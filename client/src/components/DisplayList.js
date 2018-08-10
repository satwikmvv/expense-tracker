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
        axios.get('api/expense')
            .then(res=>this.setState({
                item:res.data
            }))
        // axios.post('/api/expense',{amount:6578676958658, a:'trysqagfvqawgfewdfwsge'}).then(res=>console.log(res)).catch(err=>console.log(err))
    }


    render() {
        return (
            <div>
                <table className="table table-striped table-bordered">
                    <thead className="thead-light">
                        <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Category</th>
                        <th scope="col">Account</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(this.state.item) && this.state.item.map(x=>(
                            <tr key={x._id}>
                                <td>{new Date(x.date).toUTCString().substr(5,11)}</td>
                                <td>${x.amount}</td>
                                <td>{x.category}</td>
                                <td>{x.account}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
            </div>
        );
    }
}

export default DisplayList;