const URL = 'https://boiling-refuge-66454.herokuapp.com';

export const getImages = async () => {
  try {
    return await fetch(`${URL}/images`).then((response) => response.json());
  } catch (error) {
    console.error(error);
  }
};

export const getImageById = async (imgId: number) => {
  try {
    return await fetch(`${URL}/images/${imgId}`).then((response) =>
      response.json()
    );
  } catch (error) {
    console.error(error);
  }
};

export const http = async (url: string) => {
  try {
    return await fetch(url).then((response) => response.json());
  } catch (error) {
    console.log(error);
  }
};
