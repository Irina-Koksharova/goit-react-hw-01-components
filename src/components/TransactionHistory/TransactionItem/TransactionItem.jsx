import PropTypes from 'prop-types';
import s from './TransactionItem.module.css';

function TransactionItem({ type, amount, currency }) {
  return (
    <tr className={s.string}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionItem;
