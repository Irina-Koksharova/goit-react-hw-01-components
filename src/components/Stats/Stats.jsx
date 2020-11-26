import { Fragment } from 'react';
import PropTypes from 'prop-types';

function Stats({ label, percentage }) {
    return <Fragment>
        <span className="label">{label}</span>
        <span className="percentage">{percentage}</span>
    </Fragment>
}

Stats.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

export default Stats;