import React from 'react';
import PropTypes from 'prop-types';

import {ImageCardImg} from '../styled/components/ImageCard';

const ImageCard = ({url}) =>
  (<ImageCardImg src={url} alt='photo' rounded/>);

ImageCard.propTypes = {
  url: PropTypes.string.isRequired,
};

export default ImageCard;
