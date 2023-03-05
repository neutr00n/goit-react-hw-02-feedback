import shortid from 'shortid';
import PropTypes from 'prop-types';
import { OptionsWrapper, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsWrapper>
      {options.map(btnName => (
        <Button
          key={shortid.generate()}
          type="button"
          onClick={() => onLeaveFeedback(btnName)}
        >
          {btnName}
        </Button>
      ))}
    </OptionsWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
