import ListingStyle from "../styles/ListingPage.module.scss";
import Listing from "../components/Listing";
import Search from "../components/Search";
import Modal from "../components/Modal";
import { useModalContext } from "../Context/ModalContext";

function ListingPage() {
  const { modalActive } = useModalContext();

  return (
    <div className={ListingStyle.listing_page}>
      {modalActive ? <Modal /> : ""}
      <h1>Star Wars Characters</h1>
      <h2>
        Navigate through all the STAR WARS characters or search the specific
        ones and see their detail information by clicking show more data
      </h2>
      <Search />
      <Listing />
    </div>
  );
}

export default ListingPage;
