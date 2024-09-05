import React from 'react'
import './App.css'
import Navbar from './Navbar'
import Herobanner from './Herobanner'
import Communityactivity from './Communityactivity'
import Peersonline from './Peersonline'
import Joingroup from './Joingroup'
import Discovercommunity from './Discovercommunity'
import Contributorsandsolutionauthors from './Contributorsandsolutionauthors'
import Component from './Carousel'

function App() {
  

  return (
   <React.Fragment>
   
    <Navbar/>
    <Herobanner/>
    <Communityactivity/>
    <Peersonline/>
    <Joingroup/>
    <Discovercommunity/>
    <Contributorsandsolutionauthors/>


    </React.Fragment>
  )
}

export default App
