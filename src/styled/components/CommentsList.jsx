import styled from 'styled-components';
import {ListGroup} from 'react-bootstrap';

const CommentListParagraph = styled.p`
  margin: 0;
`;
const CommentListTime = styled.time`
  color: gray;
`;

const CommentListItem = styled(ListGroup.Item)`
  border: none;
  padding: 0 0 1rem 0;
`;

const CommentListGroup = styled(ListGroup)`
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`;

export {CommentListParagraph, CommentListItem, CommentListGroup, CommentListTime};
