import React from 'react';
import PropTypes from 'prop-types';

import { CloseIconStyles } from '../styled/components/CloseIcon';

const CloseIcon = ({ onIconClick }) => (
  <CloseIconStyles onClick={onIconClick} />
);

CloseIcon.propTypes = {
  onIconClick: PropTypes.func,
};

export default CloseIcon;
