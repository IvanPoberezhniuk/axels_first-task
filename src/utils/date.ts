import { Comment } from '../components/commentsList/CommentsList';

export const convertDate = (comment: Comment) =>
  new Date(comment.date).toLocaleDateString().split('/').join('.');
