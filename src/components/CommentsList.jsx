import React from 'react';
import PropTypes from 'prop-types';

import {
  CommentListGroup,
  CommentListItem,
  CommentListParagraph,
  CommentListTime
} from '../styled/components/CommentsList';

const CommentsList = ({comments}) => {
  const convertDate = (comment) => new Date(comment.date).toLocaleDateString().split('/').join('.');

  return (
    <CommentListGroup>
      {comments.map(comment => (
        <CommentListItem key={comment.id}>
          <CommentListParagraph>
            <CommentListTime> {convertDate(comment)} </CommentListTime>
          </CommentListParagraph>
          <CommentListParagraph>{comment.text}</CommentListParagraph>
        </CommentListItem>))}
    </CommentListGroup>
  );
};

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.number,
    id: PropTypes.number,
    text: PropTypes.string
  })).isRequired
};

export default CommentsList;
