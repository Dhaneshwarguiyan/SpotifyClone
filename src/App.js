import './App.css';
import Login from './Pages/Login';
import {useEffect} from 'react';
import { reducerCases } from './utils/Constants';
import { useStateProvider } from './utils/StateProvider';
import { initialState } from './utils/reducer';
import Spotify from './Pages/Spotify';
import { BrowserRouter } from 'react-router-dom';



function App() {

  const [{token},dispatch] = useStateProvider();

  useEffect(()=>{
    const hash = window.location.hash;
    if(!token && hash){
      let token = hash.substring(1).split("&").find(element => element.startsWith("access_token")).split("=")[1];
      dispatch({type:reducerCases.SET_TOKEN,token:token});
    }
    
},[token,dispatch])

  // const searchArtist = async (e) =>{
  //   let searchKey = "arijit singh";
  //   const data = await fetch(`https://api.spotify.com/v1/search?q=${searchKey}&type=artist`,{
  //     method:"GET",
  //     headers:{
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   const result =  await data.json();
  // }


  return (
    <>
    <BrowserRouter>
    <div className='main'>    
    {
      token ?
      <Spotify />
       :
       <Login/>
    }
    </div>
    </BrowserRouter>
    
    </>
  );}

export default App;



      // <BrowserRouter> 
      {/* <button className='login' onClick={logOut}>logout</button> */}
      {/* <SideBar/>
      <Navbar></Navbar>
        <Routes>
          {token && <Route path='/' element = {<Home/>}/>}
          <Route path='/search' element = {<Search/>}/>
          <Route path='/login' element = {<Login/>}/>
        </Routes> 
       </BrowserRouter> */}