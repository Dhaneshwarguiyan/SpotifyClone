import React from 'react';
import './css/spotify.css';
import SideBar from '../components/SideBar';
import Body from '../components/Body';

export default function Spotify() {
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
