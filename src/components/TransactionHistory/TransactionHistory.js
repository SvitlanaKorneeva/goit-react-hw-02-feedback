import React from "react";
import PropTypes from "prop-types";
import s from "./TransactionHistory.module.css";

const TransactionHistory = ( {items} ) => {
    console.log(items);
 return (
        <table className={s.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
        {items.map((el) => {
            const { id, type, amount, currency } = el;
            return (
                <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
                </tr>
            );
        })}
  </tbody>
</table>
    )
}

export default TransactionHistory;
