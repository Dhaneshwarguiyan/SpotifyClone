import React from 'react'
import './css/topPlaylist.css';
import { Link } from 'react-router-dom';
export default function TopPlaylistCard({image,name,playlistId}) {
  return (
    <Link to={`/playlist/${playlistId}`}>
    <div className='playlist-card'>
      <img src={image} alt="playlist img" />
      <div className='playlist-name'>
        <p>{name}</p>
      </div>
    </div></Link>
  )
}
