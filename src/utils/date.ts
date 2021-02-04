import { Comment } from '../redux/ducks/images';

export const convertDate = (comment: Comment) =>
  new Date(comment.date).toLocaleDateString().split('/').join('.');
