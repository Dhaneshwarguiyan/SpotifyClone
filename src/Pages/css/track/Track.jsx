import './track.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Track = ({artistTrack,count}) => {
  return (
    <div >
      <Link to={`/track/${artistTrack.id}`} className='track' >
    <div className='track-count'>{count}</div>
    <div className='track-img'>
      <img src={artistTrack.images[0].url} alt="" />
    </div>
    <div className='track-name'>
      {artistTrack.name}
      <div className='track-names'>
    {artistTrack.artists.map((art)=>{return(<div>{art.name},</div>)})}
    </div>
    </div>
    
  </Link>
    </div>
    
  )
}

export default Track
