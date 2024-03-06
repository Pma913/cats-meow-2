const dataCleaner = (catApiData) => {
  let counter = 0
  
  return catApiData.map(cat =>{
    counter++
    return {
      affectionLevel: cat.breeds[0].affection_level,
      description: cat.breeds[0].description,
      dogFriendly: cat.breeds[0].dog_friendly >= 5 ? "Yes" : "No",
      energyLevel: cat.breeds[0].energy_level,
      id: (Date.now() + counter),
      image: cat.url,
      name: cat.breeds[0].name,
      origin: cat.breeds[0].origin,
      temperament: cat.breeds[0].temperament
    }
  })
}

export default dataCleaner;