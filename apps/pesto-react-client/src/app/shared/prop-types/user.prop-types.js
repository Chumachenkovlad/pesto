import PropTypes from 'prop-types';

export const UserPropTypes = PropTypes.shape({
  id: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  avatarUrl: PropTypes.string,
});
