import './App.css';
import React, { useState } from 'react';
import Home from '../Home/Home';
import Fact, { factLoader } from '../Fact/Fact';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Favorites from '../Favorites/Favorites';
import Error from '../Error/Error';
import RootLayout from '../../utilities/RootLayout';

const App = () => {
  const [favorites, setFavorites] = useState(JSON.parse(sessionStorage.getItem('allFavorites')) || []);

  const favoriteFact = (currentFact) => {
    const noDuplicate = favorites.every(fact => fact.fact !== currentFact.fact)
    
    if (noDuplicate) {
      setFavorites([...favorites, currentFact])
      sessionStorage.setItem('allFavorites', JSON.stringify([...favorites, currentFact]))
    }
  }

  const removeFav = (id) => {
    sessionStorage.removeItem('allFavorites')
    const newFavs = favorites.filter(fact => fact.id !== id)
    setFavorites(newFavs)
    sessionStorage.setItem('allFavorites', JSON.stringify(newFavs))
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
          element: <Fact favFact={favoriteFact} />,
          loader: factLoader
        },
        {
          path: "/favorites",
          element: <Favorites removeFav={removeFav} favs={favorites} />
        }
      ]
    }
  ])
  
  return (
    <RouterProvider router={routes} />
  )
}

export default App;
