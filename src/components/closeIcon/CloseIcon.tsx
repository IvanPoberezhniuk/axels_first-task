import React from 'react';

import { CloseIconStyles } from '../../styled/components/CloseIcon';

export interface Props {
  onIconClick: () => void;
}

const CloseIcon = ({ onIconClick }: Props) => (
  <CloseIconStyles onClick={onIconClick} />
);

export default CloseIcon;
