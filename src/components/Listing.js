import ListingStyle from "../styles/Listing.module.scss";
import { Pagination } from "@mui/material";
import Character from "./Character";
import { useSearchContext } from "../Context/SearchContext";

function Listing() {
  const { setPage, charactersData } = useSearchContext();

  return (
    <div className={ListingStyle.listing_container}>
      <div className={ListingStyle.listing}>
        {charactersData
          ? charactersData.map((data) => {
              return <Character key={data.name} data={data} />;
            })
          : ""}
      </div>
      <Pagination
        count={9}
        variant="outlined"
        shape="rounded"
        onClick={(e) => setPage(e.target.textContent)}
      />
    </div>
  );
}

export default Listing;
