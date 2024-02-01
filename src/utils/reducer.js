import {reducerCases} from './Constants.js';


export const initialState = {
    token: null,
    playlists:[],
    artists:[],
    artist:null,
    artistTracks:null,
    current_id:null,
}

const reducer=(state,action)=>{
    switch(action.type){
        case reducerCases.SET_TOKEN:
            return {
                ...state,
                token:action.token
            }
        case reducerCases.REMOVE_TOKEN:
            return {
                ...state,
                token:action.token
            }
        case reducerCases.SET_PLAYLIST:
            return{
                ...state,
                playlists:action.playlists
            }
        case reducerCases.SET_ARTISTS:
            return{
                ...state,
                artists:action.artists
            }
        case reducerCases.SET_ARTIST:
            return{
                ...state,
                artist:action.artist
            }
        case reducerCases.SET_ARTIST_TRACKS:
            return{
                ...state,
                artistTracks:action.artistTracks
            }
        case reducerCases.SET_CURRENT_ID:
            return{
                ...state,
                current_id:action.current_id,
            }
        default:
            return state;
    }
};

export default reducer;