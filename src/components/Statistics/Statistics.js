import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import randomColor from 'utils/randomColor';

export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.stat__list}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={css.item}
              key={id}
              style={{ backgroundColor: randomColor() }}
            >
              <span className={css.lable}>{label}</span>
              <span className={css.percentage}>{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
