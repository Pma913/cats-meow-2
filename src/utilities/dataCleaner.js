const dataCleaner = (catApiData) => {
  
  return catApiData.map(cat =>{
    
    return {
      affectionLevel: cat.breeds[0].affection_level,
      description: cat.breeds[0].description,
      dogFriendly: cat.breeds[0].dog_friendly >= 5 ? "Yes" : "No",
      energyLevel: cat.breeds[0].energy_level,
      id: cat.id,
      image: cat.url,
      name: cat.breeds[0].name,
      origin: cat.breeds[0].origin,
      temperament: cat.breeds[0].temperament,
      vcaUrl: cat.breeds[0].vcahospitals_url,
      wikiUrl: cat.breeds[0].wikipedia_url,
      favorited: false,
    }
  })
}

export default dataCleaner;