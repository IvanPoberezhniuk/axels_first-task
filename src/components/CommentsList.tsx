import React from 'react';

import {
  CommentListGroup,
  CommentListItem,
  CommentListParagraph,
  CommentListTime
} from '../styled/components/CommentsList';

interface Comment {
  id: number,
  text: string,
  date: number
}

interface Props {
  comments: Array<Comment>
}

const CommentsList = ({ comments }: Props) => {
  const convertDate = (comment: Comment) =>
    new Date(comment.date).toLocaleDateString().split('/').join('.');

  return (
    <CommentListGroup>
      {comments.map((comment) => (
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
