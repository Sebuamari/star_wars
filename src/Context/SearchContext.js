import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios';
const STAR_WARS_API_URL = `https://swapi.dev/api/people/?page=`;

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchKeyword, setSearchKeyword] = useState(); 
    const [page, setPage] = useState(1); 
    const [charactersData, setCharactersData] = useState();

    useEffect(() => {
      getData();
    }, [page]);

    const getData = () => {
      axios.get(STAR_WARS_API_URL + page)
          .then(function (response) {
              setCharactersData(response.data.results);
              console.log(response);
          })
          .catch(function (error) {
              // handle error
              console.log(error);
          })
    }

    return (
      <SearchContext.Provider
        value={{
          searchKeyword,
          setSearchKeyword,
          page,
          setPage,
          charactersData,
          setCharactersData
        }}
      >
        {children}
      </SearchContext.Provider>
    )
};

export const useSearchContext = () => {
    return useContext(SearchContext)
}