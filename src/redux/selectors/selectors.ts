import { RootStateOrAny } from 'react-redux';

export const images = (store: RootStateOrAny) => store.imagesStore.images;
export const imageDetails = (store: RootStateOrAny) => store.imagesStore.imageDetails;
export const loading = (store: RootStateOrAny) => store.imagesStore.loading;
