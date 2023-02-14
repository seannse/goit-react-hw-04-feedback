import PropTypes from 'prop-types';
import css from './FeedbackList.module.css';

export const FeedbackItem = ({ btn, onLeaveFeedback }) => {
  return (
    <li>
      <button
        className={css.btn}
        type="button"
        onClick={() => onLeaveFeedback(btn)}
      >
        {btn}
      </button>
    </li>
  );
};

FeedbackItem.propTypes = {
  btn: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
