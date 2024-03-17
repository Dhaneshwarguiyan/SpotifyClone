import './css/search.css';
import { IoSearch } from "react-icons/io5";
import { useState ,useEffect} from 'react';
import { useStateProvider } from '../utils/StateProvider';
import Card from '../components/Card';

export default function SearchComponent(){
    const [{token},dispatch] = useStateProvider()
    const [data,setData] = useState("")
    const [search,setSearch] = useState(null)
    const getItems = async (e)=>{
        
        console.log(data)
      const result =  await fetch(`https://api.spotify.com/v1/search?q=${data}&type=artist`,{
        method: "get",
        headers:{
            Authorization:`Bearer ${token}`,
            "Content-Type":"application/json"
        },
      });
      const dat = await result.json();
      const val = await dat?.artists?.items
      setSearch(val);
      console.log(val)
      
    }
    useEffect(()=>{
        getItems();
        
    },[token,dispatch]);

    function handleChange(e){
        setData(e.target.value)
        getItems()
    }



    return( 
        <div className='search-bar-card'>
        <p>Search</p>
        <form className='search-component' >
        <IoSearch />
            <input className='search-input' type="text" placeholder='What do you want to hear' onChange={(e)=> handleChange(e)}/>
        </form>
        <div className="search-cardddd">
        {
            search ? 
            
            search.map((item)=>{return <Card key={item.id} artists={item}/>})
            
            :
            
            <></>
        }
        </div>
        </div>
    );
}