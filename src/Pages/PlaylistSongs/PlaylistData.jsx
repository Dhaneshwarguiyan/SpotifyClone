import React, { useEffect} from 'react';
import { useParams } from 'react-router';
import { useStateProvider } from '../../utils/StateProvider';
import { reducerCases } from '../../utils/Constants';
import '../Artists/artistPage.css';
import Track from '../css/track/Track';


const PlaylistData = () => {
    const [{token,playlists,playlistTracks},dispatch] = useStateProvider();
    const {playlistId} = useParams();
    useEffect(()=>{
   const getPlaylist = async () =>{
     const data2 = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`,{
      method:"GET",
       headers:{
         Authorization: `Bearer ${token}`,
       },
     });
     const items2 =  await data2.json();
     console.log(items2.items[0].track)
     dispatch({type:reducerCases.SET_PLAYLIST_TRACKS,playlistTracks:items2.items})
   }
   getPlaylist();
     },[token,dispatch]);
    let count = 0;
    let playlist = playlists.filter((playlist)=>(
         playlist.id === playlistId
    ))
  return (
    <div className='artist'>
     {
         playlists ? 
         <ul className='artist-album'>
         <li className='artist-header'>
         <div className='artist-img'>
           {<img src={playlist[0].images[0].url}/>}
         </div>
         <div className='artist-dtl'>
           <div className='artist-type'>{playlist[0].type}</div>
           <div className='artist-name'> 
            {playlist[0].name}
           </div>
           <div className='artist-genres'>
             {/* {artist.genres} */}
           </div>
         </div>
       </li>
       <li className='artist-track'>       
          {playlistTracks ? playlistTracks.map((playlistTrack)=>{ 
           count = count+1;
           return(<Track key={playlistTrack.track.id} count={count} artistTrack={playlistTrack.track} type={false}/>)}) : <div>false..</div> }  
       </li>
       </ul> : 
       <div>false</div>
     }

</div>
        
     
  )
}

export default PlaylistData
