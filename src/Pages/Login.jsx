import './css/login.css';
import {useState} from 'react'


export default function Login(){
    const [client_id,setClient_id] = useState("");
    function clickHandler(){
        const redirect_url = "http://localhost:3000";
        const auth_endpoint = 'https://accounts.spotify.com/authorize';
        const response_type = "token";
        const scope = [
            'user-read-email',
            'user-read-private',
            "user-read-playback-state",
            "user-modify-playback-state",
            "user-read-currently-playing",
            "user-read-playback-position",
            "user-top-read",
            "user-read-recently-played",
            "user-library-modify",
            'user-library-read',
            "playlist-read-private",
        "playlist-read-collaborative",
        "playlist-modify-private",
        "playlist-modify-public",
        ];
        window.location.href=`${auth_endpoint}?client_id=${client_id}&redirect_uri=${redirect_url}&scope=${scope.join(" ")}&response_type=${response_type}&show_dialog=true`;
    }

    function handleChange(e){
        setClient_id(e.target.value);
        console.log(e.target.value);
    }
    return(
        <div className="login-pg">
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt="Spotify logo" />
        <p className='inst'>
            Step 1: Go to <a href="https://developer.spotify.com/">https://developer.spotify.com/</a><br />
            Step 2: Login and then go to dashboard <br />
            Step 3: Create a new app <br />
            Step 4: Go to settings in the dashboard
            Step 5: Copy and paste the client id
        </p>
        <p className='clientId'>Client Id</p>
        <form >
                <input className='inputId' type="text" value={client_id} onChange={handleChange}/>
        </form>
         <div className='login-txt' onClick={clickHandler}>Login to spotify</div>
        </div>
    );
}