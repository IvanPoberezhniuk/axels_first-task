import styled from 'styled-components';


const CloseIconStyles = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 32px;
  height: 32px;
  z-index: 22;

  :hover {
    opacity: 1;
    cursor: pointer;
  }

  :before, :after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: #333;
  }

  :before {
    transform: rotate(45deg);
  }

  :after {
    transform: rotate(-45deg);
  }
`;


export {
  CloseIconStyles
};
