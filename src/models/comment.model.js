export default class CommentModel {
  constructor(comment = {}) {
    this.id = comment.id || null;
    this.text = comment.text || '';
    this.date = comment.date || null;
  }
}
