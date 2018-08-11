import React, { Component } from 'react';
import './App.css';
import InputExpense from './components/InputExpense';
import DisplayList from './components/DisplayList';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <div className="headerTitle ">EXPENSE TRACKER</div>
        <div className="container-fluid no-padding">
          <div className="row infoBar">
            <div className="col">Add Transaction</div>
            <div className="col">Add Card</div>
            <div className="col">Expenses this month</div>
            <div className="col">Income this month</div>
            <div className="col">Superman</div>
            <div className="col">Batman</div>
          </div>
          <div className="row contentBox">
            <div className="col-4 transInputBox">
              <div className="card">
              <div className="card-body">
                <h5 className="card-title">Add Expense/Income</h5>
                <InputExpense />
              </div>
              </div>
            </div>
            <div className="col-8 transDisplayBox">
              <DisplayList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
