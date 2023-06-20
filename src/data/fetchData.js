import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    part: "id,snippet",
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "4eea908f30mshf7f326691889487p14c420jsn9ff017d761ae",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export default async function fetchVideos(url) {
  const response = await axios.get(`${BASE_URL}/${url}`, options);
  return response.data.items;
}
