import axios from "axios";

const BASE_URL = "https://www.googleapis.com/youtube/v3";

const options = {
  params: {
    part: "snippet",
    regionCode: "US",
    maxResults: "50",
    key: `${import.meta.env.VITE_RAPID_API_KEY}`,
  },
};

export default async function fetchVideos(url) {
  const response = await axios.get(`${BASE_URL}/${url}`, options);
  return response.data.items;
}
