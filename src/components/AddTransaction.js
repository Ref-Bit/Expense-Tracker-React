import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export default () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random()*100000000),
      text,
      amount: +amount // Turn String to Number
    }
    addTransaction(newTransaction);
  }

  return (
    <React.Fragment>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text"><strong>Text</strong></label>
          <input type="text" id="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            <strong>
            Amount <br />
            (negative = expense, positive = income)
            </strong>
          </label>
          <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)}  placeholder="Enter amount..." />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </React.Fragment>
  )
}
