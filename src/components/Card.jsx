import React from 'react';
import './css/card.css';
import { Link } from 'react-router-dom';

export default function Card({artists}) {
  return (
    <Link to={`/artist/${artists.id}`}>
    <div className='card'>
      <img src={artists?.images[0]?.url} alt="Artists image: " />
        <h1>{artists?.name}</h1>
        <p>{artists?.genres[0]}</p>
    </div>
    </Link>
  )
}
