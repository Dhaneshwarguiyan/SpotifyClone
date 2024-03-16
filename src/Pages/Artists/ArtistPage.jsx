import React, { useEffect} from 'react';
import { useParams } from 'react-router';
import { useStateProvider } from '../../utils/StateProvider';
import { reducerCases } from '../../utils/Constants';
import './artistPage.css';
import Track from '../css/track/Track';


const ArtistPage = () => {
    const [{token,artist,artistTracks,current_id},dispatch] = useStateProvider();
    const {artistId} = useParams();

  useEffect(()=>{
  const getArtist = async () =>{
    const data1 = await fetch(`https://api.spotify.com/v1/artists/${artistId}`,{
      method:"GET",
      headers:{
        Authorization: `Bearer ${token}`,
      },
    });
    const items1 =  await data1.json();
    dispatch({type:reducerCases.SET_ARTIST,artist:items1});
    const data2 = await fetch(`https://api.spotify.com/v1/artists/${artistId}/albums`,{
      method:"GET",
      headers:{
        Authorization: `Bearer ${token}`,
      },
    });
    const items2 =  await data2.json();
    dispatch({type:reducerCases.SET_ARTIST_TRACKS,artistTracks:items2.items})
  }
  getArtist();
    },[token,dispatch,current_id]);
    let count = 0;
  return (
      <div className='artist'>
          {
            artist ? 
            <ul className='artist-album'>
            <li className='artist-header'>
            <div className='artist-img'>
              {<img src={artist.images[0].url}/>}
            </div>
            <div className='artist-dtl'>
              <div className='artist-type'>{artist.type}</div>
              <div className='artist-name'> 
               This is {artist.name}
              </div>
              <div className='artist-genres'>
                {artist.genres}
              </div>
            </div>
          </li>
          <li className='artist-track'>
            
            {artistTracks ? artistTracks.map((artistTrack)=>{ 
              count = count+1;
              return(<Track key={artistTrack.id} count={count} artistTrack={artistTrack} type={true}/>)}) : <div>false..</div> }
          </li>
          </ul> : 
          <div>false</div>
          }
      </div>
        
     
  )
}

export default ArtistPage
