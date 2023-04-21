import { SearchCardTypes, OptionType } from '../../types'
import './SearchCard.css'
import { BsSearch } from "react-icons/bs";


const SearchCard = ({options,term,handleSearch,onSubmit,onOptionSelect} : SearchCardTypes) => {
    return(
        <>
          <div id="search-container">
      <h1 className="search-title">Weather Forecast</h1>
      <div className="search-text">Enter blow a place you want to know the weather</div>
      <div className=" search-input-container ">
        <input className='search-input' value={term} onChange={handleSearch} type="text" />
        {options && <ul className='options-container'>
        {options.map((option:OptionType,index:number)=><li key={`${option.name}${index}`} onClick={()=>onOptionSelect(option)}>{option.name}/{option.country}</li>)}
        </ul>}
        <button className='search-btn' onClick={onSubmit}>
          {" "}
          <BsSearch></BsSearch>
        </button>
      </div>
    </div>
        
        </>
    )
    }
    
    export default SearchCard