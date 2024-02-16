const dataCleaner = (catApiData) => {
  return {
    affectionLevel: catApiData[0].breeds[0].affection_level,
    description: catApiData[0].breeds[0].description,
    dogFriendly: catApiData[0].breeds[0].dog_friendly >= 5 ? "Yes" : "No",
    energyLevel: catApiData[0].breeds[0].energy_level,
    id: Date.now(),
    image: catApiData[0].url,
    name: catApiData[0].breeds[0].name,
    origin: catApiData[0].breeds[0].origin,
    temperament: catApiData[0].breeds[0].temperament
  }
}

export default dataCleaner;