import React from 'react'
import { useStateProvider } from '../utils/StateProvider';
import TopPlaylistCard from './TopPlaylistCard';
import "./css/bodyTopPlaylist.css";
export default function BodyRecentPlalist() {
  const [{playlists}] = useStateProvider();
  return (
    <div className='body-top-playlist'>
      {
        playlists.slice(0,6).map((playlist)=>{
            return <TopPlaylistCard key={playlist.id} image={playlist.images[0].url} name={playlist.name} playlistId={playlist.id}/>
        })
      }
    </div>
  )
}
