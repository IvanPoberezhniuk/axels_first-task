import React from 'react';

import { CloseIconStyles } from '../styled/components/CloseIcon';

interface Props {
  onIconClick: () => void
}

const CloseIcon: React.FC<Props> = ({ onIconClick }) => (
  <CloseIconStyles onClick={onIconClick} />
);

export default CloseIcon;
