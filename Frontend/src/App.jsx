import React, { useEffect } from 'react'

import Navbar from './components/Navbar'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Loader } from 'lucide-react'
import {Toaster} from 'react-hot-toast'

import Homepage from './pages/Homepage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import SettingsPage from './pages/SettingsPage'
import ProfilePage from './pages/ProfilePage'

import { useAuthStore } from './store/useAuthStore.js'
import { useThemeStore } from './store/useThemeStore.js'
const App = () => {


  const { authUser, checkAuth, isCheckingAuth } = useAuthStore()
  const {theme} = useThemeStore()
  //or 
  // const authUser = useAuthStore((state) => state.authUser);
  //   const checkAuth = useAuthStore((state) => state.checkAuth);

  useEffect(() => {
    checkAuth();
  }, [checkAuth])

  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin " />
      </div>
    )
  }
  return (
    <div data-theme={theme} >
      <Navbar />

      <Routes>
        <Route exact path="/" element={authUser ? <Homepage /> : <Navigate to='/login' />} />
        <Route exact path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to='/' />} />
        <Route exact path="/login" element={!authUser ? <LoginPage /> : <Navigate to='/' />} />
        <Route exact path="/settings" element={<SettingsPage />} />
        <Route exact path="/profile" element={authUser ? <ProfilePage /> : <Navigate to='/login' />} />
      </Routes>

      <Toaster />
    </div>
  )
}

export default App