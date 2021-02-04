import React from 'react';

import { ImageCardImg } from '../../styled/components/ImageCard';

interface Props {
  url?: string
}

const ImageCard = ({ url }: Props) => <ImageCardImg src={url} alt='photo' rounded />;

export default ImageCard;
