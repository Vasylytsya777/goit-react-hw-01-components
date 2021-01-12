import React from "react";
import "./transactiosStyle.css";
import PropTypes from "prop-types";

const TransactionHistory = ({ items }) => {
  //   const { type, id, amount, currency } = items;

  return (
    <table className="transaction-history">
      <thead>
        <tr className="transactionTr">
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr className="transactionTrItem" key={item.id}>
            <>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.object,
};

export default TransactionHistory;
