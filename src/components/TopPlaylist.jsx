import React, { useEffect } from 'react'
import { reducerCases } from '../utils/Constants';
import { useStateProvider } from '../utils/StateProvider';
import TopPlaylistCard from './TopPlaylistCard';
import './css/topPlaylist.css';
import { useParams } from 'react-router';

export default function TopPlaylist() {
    const [{token,playlists},dispatch] = useStateProvider();
    const {artistId} = useParams();
    useEffect(()=>{
        const getProfile = async ()=>{
          const result =  await fetch("https://api.spotify.com/v1/me/playlists",{
          method:"GET",  
          headers:{
                Authorization:`Bearer ${token}`,
                "Content-Type":"application/json"
            }
          });
          const {items} = await result.json();
          dispatch({type:reducerCases.SET_PLAYLIST,playlists:items})
        }
        let type = "artists";
        const getFav = async ()=>{
          const artists =  await fetch(`https://api.spotify.com/v1/me/top/${type}`,{
          method:"GET",  
          headers:{
                Authorization:`Bearer ${token}`,
            }
          });
          const {items} = await artists.json();
          dispatch({type:reducerCases.SET_ARTISTS,artists:items});
        }

        getFav();
        getProfile();
    },[token,dispatch]);
    const topPlaylistCard = playlists.map((card)=>{
        return <TopPlaylistCard key={card.id} image={card.images[0].url} name = {card.name}/>
    });
  return (
    <div className="playlist-main">
        {topPlaylistCard}
    </div>
  )
}

