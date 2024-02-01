import { BiChevronLeftCircle } from "react-icons/bi";
import { BiChevronRightCircle } from "react-icons/bi";
import './css/navbar.css';
import { useState ,useEffect} from "react";
import { useStateProvider } from "../utils/StateProvider";


export default function Navbar(){
    const [profile,setProfile] = useState(null);
    const[{token,dispatch}] = useStateProvider();
    // useEffect(()=>{
    //     const getProfile = async ()=>{
    //       const result =  await fetch("https://api.spotify.com/v1/me/playlists",{
    //       method:"GET",  
    //       headers:{
    //             Authorization:`Bearer ${token}`,
    //             "Content-Type":"application/json"
    //         }
    //       });
    //       const data = await result.json();
    //       setProfile(data);
    //       console.log(data);
    //     }
    //     getProfile();
        
    // },[token,dispatch]);
    return (
        <div className="top-bar">
            <ul className="top-items">
            <li className="arrow" >
            <BiChevronLeftCircle size={35} />
            <BiChevronRightCircle size={35} />
            </li>
            <li className="arrow">
                <div className="img" >
                    {profile && <img src={profile.images[0].url} alt="" />}
                </div>
            </li>
            </ul>
        </div>
    );
}