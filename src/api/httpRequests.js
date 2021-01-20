const URL = 'https://boiling-refuge-66454.herokuapp.com';

export const getImages = async () => {
  try {
    const response = await fetch(`${URL}/images`);
    return await response.json();
  } catch (e) {
    console.error(e);
  }
};

export const getImageById = async (imgId) => {
  try {
    const response = await fetch(`${URL}/images/${imgId}`);
    return await response.json();
  } catch (e) {
    console.error(e);
  }
};


