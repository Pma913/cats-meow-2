import './App.css';
import React, { useState, useEffect } from 'react';
import Home from '../Home/Home';
import Fact from '../Fact/Fact';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Favorites from '../Favorites/Favorites';
import Error from '../Error/Error';
import RootLayout from '../../utilities/RootLayout';
import dataCleaner from '../../utilities/dataCleaner';
import { getCatPhotos } from '../../utilities/api-call';
import FactCard from '../FactCard/FactCard';

const App = () => {
  const [favorites, setFavorites] = useState([]);
  const [cats, setCats] = useState([])

  const favoriteFact = (currentFact) => {
    const noDuplicate = favorites.every(fact => fact.id !== currentFact.id)
    
    if (noDuplicate) {
      setFavorites([...favorites, currentFact])
    }
  }

  const removeFav = (id) => {
    const newFavs = favorites.filter(fact => fact.id !== id)
    setFavorites(newFavs)
  }

  const addData = (data) => {
    setCats([...cats, ...data])
  }

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error err="Looks like something is wrong. Please try again later." />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/fact",
          element: <Fact favFact={favoriteFact} removeFav={removeFav} cats={cats} addData={addData} />,
          // loader: factLoader
        },
        {
          path: "/favorites",
          element: <Favorites removeFav={removeFav} favs={favorites} />
        }
      ]
    }
  ])

  useEffect(() => {
    if (cats.length === 0) {
      getCatPhotos()
      .then(res => {
        const catSpecs = dataCleaner(res).map(cat => <FactCard 
          key={cat.id}
          details={cat} 
          favFact={favoriteFact}
          removeFav={removeFav}
        />);
        setCats(catSpecs)
        console.log(catSpecs)
      })
    }
  })

  return (
    <RouterProvider router={routes} />
  )
}

export default App;
