import React, { useState, useEffect } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import { Homepage, Layout, SearchPage, FavoritesPage, UploadPage, ProfilePage, LandingPage } from './pages'

import { useSongs } from '../lib/hooks'
import { useDispatch, useSelector } from 'react-redux'
import { addToStoreSongsArray } from './redux/slices/songsSlice'

const App = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector(state => state.auth);
  const [auth, setAuth] = useState(isAuth || false);
  const songs = useSongs();
  dispatch(addToStoreSongsArray(songs));

  useEffect(() => {
    setAuth(isAuth);
  }, [isAuth])

  return (
        <Routes>
          <Route path="/" element={ auth ? <Layout> <Homepage/> </Layout> : <LandingPage /> } />
          <Route path="search" element={ <Layout> <SearchPage /> </Layout> } />
          <Route path="favorites" element={ <Layout> <FavoritesPage /> </Layout> } />
          <Route path="upload" element={ <Layout> <UploadPage /> </Layout> } />
          <Route path="profile" element={ <Layout> <ProfilePage /> </Layout> } />
        </Routes>
  )
}

export default App
