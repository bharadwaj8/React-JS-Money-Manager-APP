import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionsList: [],
    title: '',
    amount: '',
    type: `${transactionTypeOptions[0].displayText}`,
  }

  getTitle = event => {
    this.setState({title: event.target.value})
  }

  getAmount = event => {
    this.setState({amount: event.target.value})
  }

  getType = event => {
    this.setState({type: event.target.value})
  }

  addTransaction = () => {
    const {title, amount, type} = this.state

    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
      isDelete: false,
    }

    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      title: '',
      amount: '',
      type: `${transactionTypeOptions[0].displayText}`,
    }))
  }

  updateDelete = id => {
    this.setState(prevState => ({
      transactionsList: prevState.transactionsList.map(each => {
        if (each.id === id) {
          return {...each, isDelete: !each.isDelete}
        }
        return each
      }),
    }))
  }

  render() {
    const {transactionsList, title, amount, type} = this.state

    let incomeAmount = 0
    const calculateIncome = item => {
      if (item.type === 'Income') {
        incomeAmount += parseInt(item.amount)
      }
    }

    let expenseAmount = 0
    const calculateExpense = item => {
      if (item.type === 'Expenses') {
        expenseAmount += parseInt(item.amount)
      }
    }
    const filteredTransactionsList = transactionsList.filter(
      each => each.isDelete !== true,
    )

    filteredTransactionsList.forEach(calculateIncome)
    filteredTransactionsList.forEach(calculateExpense)

    return (
      <div className="bg">
        <div className="header">
          <h1 className="name">Hi, Richard</h1>
          <p className="desc">
            Welcome back to your <span className="app-name">Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          incomeAmount={incomeAmount}
          expenseAmount={expenseAmount}
        />

        <div className="transaction">
          <div className="transaction-input">
            <h1 className="heading">Add Transaction</h1>
            <label className="label" htmlFor="title">
              TITLE
            </label>
            <input
              className="input"
              id="title"
              type="text"
              placeholder="TITLE"
              onChange={this.getTitle}
              value={title}
            />
            <label className="label" htmlFor="title">
              AMOUNT
            </label>
            <input
              className="input"
              id="amount"
              type="text"
              placeholder="AMOUNT"
              onChange={this.getAmount}
              value={amount}
            />
            <label className="label" htmlFor="type">
              TYPE
            </label>
            <select
              id="type"
              className="input"
              onChange={this.getType}
              value={type}
            >
              {transactionTypeOptions.map(each => (
                <option key={each.optionId} value={each.displayText}>
                  {each.displayText}
                </option>
              ))}
            </select>
            <button
              className="add-button"
              type="button"
              onClick={this.addTransaction}
            >
              Add
            </button>
          </div>
          <div className="transaction-history">
            <h1 className="heading">History</h1>
            <ul className="history-data">
              <li className="data-header">
                <p className="th">Title</p>
                <p className="th">Amount</p>
                <p className="th">Type</p>
              </li>
              {filteredTransactionsList.map(each => (
                <TransactionItem
                  key={each.id}
                  details={each}
                  updateDelete={this.updateDelete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
