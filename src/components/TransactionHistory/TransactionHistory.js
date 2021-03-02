import React from 'react';
import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  console.log(items);
  return (
    <table className={s.transactionHistory}>
      <thead className={s.title}>
        <tr >
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(el => {
          const { id, type, amount, currency } = el;
          return (
            <tr key={id}>
              <td className={s.item}>{type}</td>
              <td className={s.item}>{amount}</td>
              <td className={s.item}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
