import React, { useState } from 'react'
import logo from './assets/images/logo.svg'
import { Dashboard, LandingPage } from './pages'

const auth = true;

function App() {
  return (
    auth ? <Dashboard /> : <LandingPage />
  )
}

export default App
