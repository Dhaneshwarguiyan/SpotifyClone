import React, { useState } from 'react';
import './css/spotify.css';
import SideBar from '../components/SideBar';
import Body from '../components/Body';
import Footer from '../components/Footer';
import { useStateProvider } from '../utils/StateProvider';

export default function Spotify() {
    const [{navHeight},dispatch] = useStateProvider();
  return (
    <div className='spotify-screen'>
      <ul className='spotify'>
      <li className='sid'>
            <SideBar/>
        </li>
        <li className='main-body'>
            <Body />
        </li>
      </ul>
    </div>
  )
}
