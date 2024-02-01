import React from 'react'
import './css/topPlaylist.css';
export default function TopPlaylistCard({image,name}) {
  return (
    <div className='playlist-card'>
      <img src={image} alt="playlist img" />
      <div className='playlist-name'>
        <p>{name}</p>
      </div>
    </div>
  )
}
