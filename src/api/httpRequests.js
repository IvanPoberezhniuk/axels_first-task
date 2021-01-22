const URL = 'https://boiling-refuge-66454.herokuapp.com';

export const getImages = async () => {
  try {
    return await fetch(`${URL}/images`).then(res => res.json());
  } catch (e) {
    console.error(e);
  }
};

export const getImageById = async (imgId) => {
  try {
    return await fetch(`${URL}/images/${imgId}`).then(res => res.json());
  } catch (e) {
    console.error(e);
  }
};


