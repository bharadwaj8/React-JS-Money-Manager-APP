import './index.css'

const MoneyDetails = props => {
  const {incomeAmount, expenseAmount} = props
  const totalAmount = parseInt(incomeAmount) - parseInt(expenseAmount)
  console.log(typeof totalAmount)
  return (
    <ul className="categories">
      <li className="category-card green">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="icon"
        />
        <div className="card-desc">
          <p className="card-text">Your Balance</p>
          <p className="card-amount" testid="balanceAmount">
            Rs. {totalAmount}
          </p>
        </div>
      </li>
      <li className="category-card blue">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="icon"
        />
        <div className="card-desc">
          <p className="card-text">Your Income</p>
          <p className="card-amount" testid="incomeAmount">
            Rs. {parseInt(incomeAmount)}
          </p>
        </div>
      </li>
      <li className="category-card violet">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="icon"
        />
        <div className="card-desc">
          <p className="card-text">Your Expenses</p>
          <p className="card-amount" testid="expensesAmount">
            Rs. {parseInt(expenseAmount)}
          </p>
        </div>
      </li>
    </ul>
  )
}

export default MoneyDetails
