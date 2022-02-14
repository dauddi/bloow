import React, { useEffect } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import logo from './assets/images/logo.svg'
import { Homepage, Layout, SearchPage, FavoritesPage, UploadPage, ProfilePage } from './pages'

import { useSongs } from '../lib/hooks'
import { useDispatch, useSelector } from 'react-redux'
import { addToStoreSongsArray } from './redux/slices/songsSlice'

const auth = true;

!auth ? <Navigate to="/welcome" /> : null;

function App() {
  const dispatch = useDispatch();
  const songs = useSongs();
  dispatch(addToStoreSongsArray(songs))

  return (
    <Layout>
      <Routes>
        <Route path="/" element={ <Homepage/> } />
        <Route path="search" element={ <SearchPage /> } />
        <Route path="favorites" element={ <FavoritesPage /> } />
        <Route path="upload" element={ <UploadPage /> } />
        <Route path="profile" element={ <ProfilePage /> } />
      </Routes>
    </Layout>
  )
}

export default App
