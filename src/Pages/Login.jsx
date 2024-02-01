import './css/login.css';

function clickHandler(){
    const client_id = "31a5360c58654487b31db6327f949611";
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

export default function Login(){
    return(
        <div className="login-pg">
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt="Spotify logo" />
         <div className='login-txt' onClick={clickHandler}>Login to spotify</div>
        </div>
    );
}