import PropTypes from 'prop-types';
import { Bold } from './Notification.styled';

export const Notification = ({ message }) => {
  return <Bold>{message}</Bold>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
