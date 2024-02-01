import './css/home.css';
import { useStateProvider } from "../utils/StateProvider.jsx";
import Card from '../components/Card.jsx';
import BodyRecentPlalist from '../components/BodyRecentPlalist.jsx';

  const date = new Date();
  let time = date.getHours();
  let greet ="";
  if(time<12 && time>0){
    greet = "Good Morning";
  }
  if(time < 16 && time >= 12){
    greet = "Good Afternoon";
  }
  if(time <= 24 && time >= 16){
    greet = "Good Afternoon";
  }
export default function Home(){
    const [{artists}] = useStateProvider();
    return(
        <div className='header'>
         <ul className='playlists'>
          <li>
            <h1 className='body-greet'>{greet}</h1>
            <BodyRecentPlalist />
          </li>
        <li className='fav-artists'>
        {
         artists.map((artist)=>{
              return <Card key={artist.id} artists={artist}/>
            })
          }
        </li>
        </ul>
        </div>
    );
}