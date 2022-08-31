import React from 'react'
import Header from './components/header/Header'
import Navigation from './components/navigation/Navigation'
import About from './components/about/About'
import Expirience from './components/expirience/Expirience'
import Contact from './components/contact/Contact'
import Portfolio from './components/portfolio/Portfolio'
import {jsx as _jsx} from 'react/jsx-runtime';

const App = () => {
  return (
    <>
    <Header/>
    <Navigation/>
    <About/>
    <Expirience/>
    <Portfolio/>
    <Contact/>
    
    </>
  )
}

export default App