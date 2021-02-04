export const convertDate = (date: number): string =>
  new Date(date).toLocaleDateString().split('/').join('.');
