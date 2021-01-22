import CommentModel from './comment.model';

export default class ImageModel {
  constructor(image = {}) {
    this.id = image.id || '';
    this.url = image.url || '';
    this.comments = image.comments || [new CommentModel({})];
  }
}

