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

export default getCatFacts;