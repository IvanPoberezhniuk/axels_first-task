const URL = 'https://boiling-refuge-66454.herokuapp.com';

export const getImages = async () => {
  try {
    return await fetch(`${URL}/images`).then((response) => response.json());
  } catch (error) {
    console.error(error);
  }
};

export const getImageById = async (imgId) => {
  try {
    return await fetch(`${URL}/images/${imgId}`).then((response) =>
      response.json()
    );
  } catch (error) {
    console.error(error);
  }
};
