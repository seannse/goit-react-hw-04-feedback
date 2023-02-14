// import PropTypes from 'prop-types';
import css from './FeedbackList.module.css';
import PropTypes from 'prop-types';
import { FeedbackItem } from './FeedbackItem';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.list}>
      {options.map(btn => (
        <FeedbackItem key={btn} btn={btn} onLeaveFeedback={onLeaveFeedback} />
      ))}
    </ul>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
