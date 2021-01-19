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

export const postComment = async (imgId, body) => {
  try {
    const body = JSON.stringify({name: 'VASYA', comment: '123ooop3212'});
    const response = await fetch(`${URL}/images/${imgId}/comments`, {
      method: 'POST',
      body
    });
    return await response.json();
  } catch (e) {
    console.error(e);
  }
};


