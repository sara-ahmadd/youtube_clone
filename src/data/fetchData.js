import axios from "axios";

// const BASE_URL = "https://www.googleapis.com/youtube/v3";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    part: "snippet",
    regionCode: "US",
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": `${import.meta.env.VITE_RAPID_API_KEY}`,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export default async function fetchVideos(url) {
  const response = await axios.get(`${BASE_URL}/${url}`, options);
  return response.data.items;
}
