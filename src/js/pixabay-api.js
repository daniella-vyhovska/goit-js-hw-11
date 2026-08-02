import axios from "axios";

const API_KEY = "56971775-d04a48763efd5a48d7e033b79";
const BASE_URL = "https://pixabay.com/api/";

export async function getImagesByQuery(query) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
    },
  });

  return response.data;
}