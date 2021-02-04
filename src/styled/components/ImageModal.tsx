import { Col } from 'react-bootstrap';
import styled from 'styled-components';

const ImageModalCol = styled(Col)`
  > * {
    margin-bottom: 2rem;
  }
`;

const ImageModalDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 18rem;
  @media (max-width: 767px) {
    margin: -1rem -1rem 1rem -1rem;
  }
`;

export { ImageModalCol, ImageModalDiv };
