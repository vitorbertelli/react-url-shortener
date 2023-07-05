import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/",
  headers: {
    "Content-Type": "application/json",
  },
});

 const shortenerUrl = (url) => {
  return api.post("/url", {
    originalUrl: url,
  })
  .then(function (response) {
      const res = response.data;
      const shortUrl = res.url;
      return shortUrl;
  });
}

export default shortenerUrl; 