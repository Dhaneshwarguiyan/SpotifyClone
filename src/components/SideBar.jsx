import { Link } from "react-router-dom";
import { FaSpotify } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { VscLibrary } from "react-icons/vsc";
import { IoMdAdd } from "react-icons/io";
import { useStateProvider } from "../utils/StateProvider";
import TopPlaylist from "./TopPlaylist";
import "./css/sidebar.css";

export default function SideBar() {
  const [{token}] = useStateProvider();
  return (
    <div className="sid-bar">
      <ul className="sid-list">
        <li className="sid-spotify">
          <FaSpotify className="sid-icon" size={40} />
          Spotify
        </li>
        <Link to="/">
          <li className="sid-item">
            <MdHomeFilled className="sid-icons" size={24} />
            <div>
            </div>
            Home
          </li>
        </Link>
        <Link to="/search">
          <li className="sid-item search">
            <FaSearch className="sid-icons" size={17} />
            Search
          </li>
        </Link>
      </ul>
      <ul className="lib">
        <li className="lib-item">
          <div className="lib-tab">
            <VscLibrary className="sid-icons-lib" />
            Library
          </div>
            <IoMdAdd className="sid-icons-lib" />
        </li>
        <li className="lib-playlist">
        <TopPlaylist />
        </li>
{
    !token &&         
    <li className="plylst">
        ! Login to see playList
    </li>
}
      </ul>
     
    </div>
  );
}
