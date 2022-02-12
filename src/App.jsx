import React, { useState } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import logo from './assets/images/logo.svg'
import { Homepage, Layout, SearchPage, FavoritesPage, UploadPage, ProfilePage } from './pages'

const auth = true;

!auth ? <Navigate to="/welcome" /> : null;

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={ <Homepage/> } />
        <Route path="search" element={ <SearchPage /> } />
        <Route path="favorites" element={ <FavoritesPage /> } />
        <Route path="upload" element={ <UploadPage /> } />
        <Route path="profile" element={ <ProfilePage /> } />
      </Routes>
      <h1>Home</h1>
    </Layout>
  )
}

export default App
