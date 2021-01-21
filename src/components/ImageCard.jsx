import React from 'react';
import PropTypes from 'prop-types';

import {ImageCardImg} from '../styled/components/ImageCard';

const ImageCard = ({url, showModal}) =>
  (<ImageCardImg src={url} onClick={showModal} alt='photo' rounded/>);

ImageCard.propTypes = {
  url: PropTypes.string.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default ImageCard;
