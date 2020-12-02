import PropTypes from 'prop-types';
import s from './Stats.module.css';
import { makeRandomNumber } from './randomBGColor';

function Stats({ label, percentage }) {
  return (
    <li className={s.item}>
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
    </li>
  );
}

Stats.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Stats;
