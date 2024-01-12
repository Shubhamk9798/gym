export const exerciseOptions = {
  method: "GET",

  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": "22a877f7e8mshe8e24d6e87f3fa8p12a672jsnca4832f56f5a",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": "22a877f7e8mshe8e24d6e87f3fa8p12a672jsnca4832f56f5a",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
