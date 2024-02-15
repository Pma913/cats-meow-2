const getCatFacts = (url) => {
  return fetch(url)
  .then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    } else {
      return res.json();
    }
  });
};

const getCatPhotos = () => {
  return fetch('https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1', {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "x-api-key" : "live_FuFFXKaSKCVUcKTZnk9uNsM0iH56QnCHDr36p2iLRV7HIYpsbrjBdkcThRCCUjQT"
    }
  })
  .then(res => {
    if (!res.ok) {
      console.log('whoops')
      throw new Error(res.status);
    } else {
      console.log('what is wrong?')
      return res.json();
    }
  });
}

export { getCatFacts, getCatPhotos };