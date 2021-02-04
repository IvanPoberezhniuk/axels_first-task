import React from 'react';

import {
  CommentListGroup,
  CommentListItem,
  CommentListParagraph,
  CommentListTime
} from '../../styled/components/CommentsList';
import { convertDate } from '../../utils/date';
import { Comment } from '../../redux/ducks/images';

export interface Props {
  comments?: Array<Comment>;
}

const CommentsList = ({ comments = [] }: Props) => {
  return (
    <CommentListGroup>
      {comments.map((comment: Comment) => (
        <CommentListItem key={comment.id}>
          <CommentListParagraph>
            <CommentListTime> {convertDate(comment)} </CommentListTime>
          </CommentListParagraph>
          <CommentListParagraph>{comment.text}</CommentListParagraph>
        </CommentListItem>
      ))}
    </CommentListGroup>
  );
};

export default CommentsList;
