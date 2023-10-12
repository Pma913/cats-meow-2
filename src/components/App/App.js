import './App.css';
import React, { useState } from 'react';
import Home from '../Home/Home';
// import Header from '../Header/Header';
import Fact, { factLoader } from '../Fact/Fact';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Favorites from '../Favorites/Favorites';
import Error from '../Error/Error';
import RootLayout from '../../utilities/RootLayout';

const App = () => {
  const [favorites, setFavorites] = useState(JSON.parse(sessionStorage.getItem('allFavorites')) || []);
  const [err, setErr] = useState('');

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
  
  const removeErr = () => {
    setErr('')
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
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
        },
        {
          path: "/*",
          element: <Error removeErr={removeErr} err="Page does not exist" /> 
        }
      ]
    },
    
    ]
  )

  
    if (err) {
      return (
        <div className="error-page">
          <Error removeErr={removeErr} err={err} />
        </div>
      )
    } else {
      return (
        // <main>
        //   <Header />
        //   <Switch>
        //     <Route exact path="/" render={() => {
        //       return <Home />
        //     }} />
        //     <Route exact path="/fact" render={() => {
        //       return <Fact favFact={favoriteFact} />
        //     }} />
        //     <Route exact path="/favorites" render={() => {
        //       return <Favorites removeFav={removeFav} favs={favorites}/>
        //     }} />
        //     <Route exact path="/*" render={() => <Error removeErr={removeErr} err="Page does not exist" />} />
        //   </Switch>
        // </main>
        
        <RouterProvider router={router} />
      )
    }
  
}

export default App;
