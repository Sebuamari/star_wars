import ModalStyle from "../styles/Modal.module.scss";
import { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";
import { MdOutlineClose, MdExpandMore, MdExpandLess } from "react-icons/md";
import { useModalContext } from "../Context/ModalContext";

function Modal() {
  const [showMoreData, setShowMoreData] = useState(false);
  const [films, setFilms] = useState([]);
  const [species, setSpecies] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [homeworld, setHomeworld] = useState([]);
  const [starships, setStarships] = useState([]);
  const { charactersData, setModalActive } = useModalContext();

  const getData = () => {
    Promise.all(
      charactersData.films
        ? charactersData.films.map((url) => {
            return axios.get(url);
          })
        : ""
    ).then((response) => {
      setFilms([...films, ...response]);
    });

    axios.get(charactersData.homeworld).then((response) => {
      setHomeworld(response.data.name);
    });

    Promise.all(
      charactersData.species
        ? charactersData.species.map((url) => {
            return axios.get(url);
          })
        : ""
    ).then((response) => {
      setSpecies([...species, ...response]);
    });

    Promise.all(
      charactersData.starships
        ? charactersData.starships.map((url) => {
            return axios.get(url);
          })
        : ""
    ).then((response) => {
      setStarships([...starships, ...response]);
    });

    Promise.all(
      charactersData.vehicles
        ? charactersData.vehicles.map((url) => {
            return axios.get(url);
          })
        : ""
    ).then((response) => {
      setVehicles([...vehicles, ...response]);
    });
  };

  useEffect( () => {
    getData();
  },[])

  return (
    <div className={ModalStyle.modal}>
      <div className={ModalStyle.data_container}>
        <button
          className={ModalStyle.close_button}
          onClick={() => setModalActive(false)}
        >
          Close
          <MdOutlineClose />
        </button>
        <div className={ModalStyle.modal_data_set}>
          <div className={ModalStyle.modal_data}>
            <p>Name:</p>
            <p>{charactersData.name}</p>
          </div>
          <div className={ModalStyle.modal_data}>
            <p>Birth Year:</p>
            <p>{charactersData.birth_year}</p>
          </div>
          <div className={ModalStyle.modal_data}>
            <p>Gender:</p>
            <p>{charactersData.gender}</p>
          </div>
          <div className={ModalStyle.modal_data}>
            <p>Hair color:</p>
            <p>{charactersData.hair_color}</p>
          </div>
          <div className={ModalStyle.modal_data}>
            <p>Eye color:</p>
            <p>{charactersData.eye_color}</p>
          </div>
          <div className={ModalStyle.modal_data}>
            <p>Skin Color:</p>
            <p>{charactersData.skin_color}</p>
          </div>
          <div className={ModalStyle.modal_data}>
            <p>Height:</p>
            <p>{charactersData.height}</p>
          </div>
          <div className={ModalStyle.modal_data}>
            <p>Mass:</p>
            <p>{charactersData.mass}</p>
          </div>
          {showMoreData ? (
            <>
              <div className={ModalStyle.modal_data}>
                <p>Films:</p>
                <p>
                  {films.length > 1
                    ? films.map((film, id) =>
                        id === films.length - 1
                          ? film.data.title + "."
                          : film.data.title + ", "
                      )
                    : "unknown"}
                </p>
              </div>
              <div className={ModalStyle.modal_data}>
                <p>Homeworld:</p>
                <p>{homeworld ? homeworld + "." : ""}</p>
              </div>
              <div className={ModalStyle.modal_data}>
                <p>Species:</p>
                <p>
                  {species.length > 1
                    ? species.map((species, id) =>
                        id === species.length - 1
                          ? species.data.name + "."
                          : species.data.name + ", "
                      )
                    : "unknown"}
                </p>
              </div>
              <div className={ModalStyle.modal_data}>
                <p>Starships:</p>
                <p>
                  {starships.length > 1
                    ? starships.map((starship, id) =>
                        id === starships.length - 1
                          ? starship.data.name + "."
                          : starship.data.name + ", "
                      )
                    : "unknown"}
                </p>
              </div>
              <div className={ModalStyle.modal_data}>
                <p>Vehicles:</p>
                <p>
                  {vehicles.length > 1
                    ? vehicles.map((vehicle, id) =>
                        id === vehicles.length - 1
                          ? vehicle.data.name + "."
                          : vehicle.data.name + ", "
                      )
                    : "unknown"}
                </p>
              </div>
            </>
          ) : (
            ""
          )}
          <button onClick={() => setShowMoreData(!showMoreData)}>
            {showMoreData ? "Hide Some Data" : "Show More Data"}
            {showMoreData ? <MdExpandLess /> : <MdExpandMore />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
