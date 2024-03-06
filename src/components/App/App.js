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

const App = () => {
  const [favoritedFacts, setFavoritedFacts] = useState([]);
  const [cats, setCats] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (cats.length === 0) {
      getCatPhotos()
      .then(res => {
        setCats(dataCleaner(res))
      })
      .catch(err => {
        console.log('things are heading up')
        console.log(err)
        throw new Error(err)
      })
    }
    console.log(cats, 'useEffect hook in app')
  },[cats])

  const favoriteFact = (currentFact) => {
    const noDuplicate = favoritedFacts.every(fact => fact.id !== currentFact.id)
    if (noDuplicate) {
      setFavoritedFacts([...favoritedFacts, currentFact])
    }
  }

  const removeFav = (id) => {
    const newFavs = favoritedFacts.filter(fact => fact.id !== id)
    setFavoritedFacts(newFavs)
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
          element: <Fact 
            favFact={favoriteFact}
            removeFav={removeFav} 
            setCats={setCats} 
            cats={cats} 
            addData={addData} 
            catCount={count}
            saveCatCount={setCount}/>,
        },
        {
          path: "/favorites",
          element: <Favorites removeFav={removeFav} favs={favoritedFacts} />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={routes} />
  )
}

export default App;
