import axios from 'axios';

export const fetchImages = async (keyword, page) => {
  const API_KEY = '40561275-509fd25e8eff038878750ce8a';

  const result = await axios.get(
    `https://pixabay.com/api/?q=${keyword}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return result;
};
