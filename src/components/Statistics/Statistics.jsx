import PropTypes from 'prop-types';
import Stats from './Stats/Stats';

function Statistics({ title, stats }) { 
    return <section className="statistics">
       { title && <h2 className="title">{title}</h2>}
        
        <ul className="stat-list">
            {stats.map(stat => (
                <li className="item" key={stat.id}> 
                    <Stats
                        label={stat.label}
                        percentage={stat.percentage}
                    />
                </li>
            ))}
        </ul>
    </section>
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
}

export default Statistics;