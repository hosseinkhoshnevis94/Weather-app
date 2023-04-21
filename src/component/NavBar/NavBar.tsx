import { BsSearch } from "react-icons/bs";
import './NavBar.css'

const NavBar = () =>{

    return(
        <nav id='navbar'>
        <div className='navbar-title'>Weather Forecast</div>
        <div className='navbar-input-container'>
        <input placeholder="Search city" className='search-input'  type="text"  />
        <button className='search-btn' >
          {" "}
          <BsSearch className="search-icon"></BsSearch>
        </button>
        </div>
    </nav>
    )
}

export default NavBar