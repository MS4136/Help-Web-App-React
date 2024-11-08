import React, { lazy, useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { themeChange } from 'theme-change'
import checkAuth from './app/auth';
import initializeApp from './app/init';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Navbar from './pages/Navbar/Navbar';

// Importing pages
const Layout = lazy(() => import('./containers/Layout'))
const Login = lazy(() => import('./pages/Login'))
const SplashScreen = lazy(() => import('./pages/SplashScreen'))
const Phone = lazy(() => import('./pages/Phone'))
const UserDetail = lazy(() => import('./pages/UserDetail'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))
const Register = lazy(() => import('./pages/Register'))
const Documentation = lazy(() => import('./pages/Documentation'))


// Initializing different libraries
initializeApp()


// Check for login and initialize axios
const token = checkAuth()


function App() {

  useEffect(() => {
    // 👆 daisy UI themes initialization
    themeChange(false)
  }, [])


  return (
    <>
      <Router>
        <Routes>
         <Route path="/" element={<SplashScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Phone" element={<Phone />} />
          <Route path="/UserDetail" element={<UserDetail />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Search" element={<Search />} />
          
          {/* Place new routes over this */}
          <Route path="/app/*" element={<Layout />} />

          <Route path="*" element={<Navigate to={token ? "/app/welcome" : "/login"} replace />}/>

        </Routes>
      </Router>
    </>
  )
}

export default App
