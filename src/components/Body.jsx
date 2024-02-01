import React from 'react'
import './css/body.css';
import Navbar from './Navbar';
import Home from '../Pages/Home';
import SearchComponent from '../Pages/SearchComponent.jsx';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import ArtistPage from '../Pages/Artists/ArtistPage.jsx';

export default function Body() {
  
  return (
    <div className='body'>
      
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/artist/:artistId' element={<ArtistPage/>}/>
        <Route path="/search" element={<SearchComponent/>}/>
      </Routes>
      
    </div>
  )
}
