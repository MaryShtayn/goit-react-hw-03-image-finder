import axios from 'axios';

const API_KEY = '32999869-250accc55f8619ccb56097a0b';
const BASE_URL = 'https://pixabay.com/api/';
const searchParams = 'per_page=12&image_type=photo&orientation=horizontal';

export const getImages = async (query, page) => {
  const { data } = await axios.get(
    `${BASE_URL}?key=${API_KEY}&q=${query}&page=${page}&${searchParams}`
  );

  return data;
};

export default getImages;
