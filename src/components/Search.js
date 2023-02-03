import SearchStyle from "../styles/Search.module.scss";
import { FiSearch } from "react-icons/fi";
import { useSearchContext } from "../Context/SearchContext";
import axios from 'axios';
import { useEffect } from "react";
const STAR_WARS_API_SEARCH_URL = `https://swapi.dev/api/people/?search=`

function Search() {
  const { searchKeyword, setSearchKeyword, setCharactersData } = useSearchContext()
    
  const getData = () => {
    axios
      .get(STAR_WARS_API_SEARCH_URL + searchKeyword)
      .then(function (response) {
        setCharactersData(response.data.results);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  return (
    <div className={SearchStyle.search_container}>
        <input type="text" onChange={(e) => setSearchKeyword(e.target.value)}/>
        <button onClick={() => getData()}> 
            Search
            <FiSearch size={"20px"}/>
        </button>
    </div>
  );
}

export default Search;
