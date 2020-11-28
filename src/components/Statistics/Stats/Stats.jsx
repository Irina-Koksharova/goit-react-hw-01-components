import { Fragment } from 'react';
import PropTypes from 'prop-types';
import s from './Stats.module.css';
import { makeRandomNumber } from './randomBGColor';

function Stats({ label, percentage }) {
  return (
    <Fragment>
      <span className={s.label}>{label}</span>
      <span
        className={s.percentage}
        style={{
          backgroundColor: `rgb(${makeRandomNumber(255, 0)}, 
            ${makeRandomNumber(255, 0)}, ${makeRandomNumber(255, 0)})`,
        }}
      >
        {percentage}%
      </span>
    </Fragment>
  );
}

Stats.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Stats;
