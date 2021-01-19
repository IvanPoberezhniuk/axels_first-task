import {Col} from 'react-bootstrap';
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
`;

export {
  ImageModalCol,
  ImageModalDiv
};
