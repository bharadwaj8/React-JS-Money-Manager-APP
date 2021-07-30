import './index.css'

const TransactionItem = props => {
  const {details, updateDelete} = props
  const {id, title, amount, type} = details

  const deleteTransaction = () => {
    updateDelete(id)
  }

  return (
    <li className="data-header">
      <p className="td">{title}</p>
      <p className="td">{amount}</p>
      <p className="td">{type}</p>
      <button
        className="delete-button"
        type="button"
        onClick={deleteTransaction}
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default TransactionItem
