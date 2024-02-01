import React from 'react';
import './css/card.css';
import { Link } from 'react-router-dom';

export default function Card({artists}) {
  return (
    <div className='card'>
      <Link to={`/artist/${artists.id}`}><img src={artists.images[1].url} alt="Artists image: " /></Link>
        <h1>{artists.name}</h1>
        <p>{artists.genres[0]}  
        </p>
    </div>
  )
}
