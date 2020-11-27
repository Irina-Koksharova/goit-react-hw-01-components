import PropTypes from 'prop-types';
import { Fragment } from 'react';

function TransactionItem({type, amount, currency}) {
    return <Fragment>
        <td>{type}</ td>
        <td>{amount}</td>
        <td>{currency}</td>
    </Fragment>
}

TransactionItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}

export default TransactionItem;