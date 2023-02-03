import ModalStyle from "../styles/Modal.module.scss";
import { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";
import { MdOutlineClose, MdExpandMore, MdExpandLess } from "react-icons/md";
import { useModalContext } from "../Context/ModalContext";

function Modal() {
  const [showMoreData, setShowMoreData] = useState(false);
  let films = [], species = [], vehicles = [], homeworld = [], starships = [];
  const { charactersData, setModalActive } = useModalContext();

  const getData = () => {
    charactersData.films.map( (url) => {
        axios
            .get(url)
            .then(function (response) {
                films.push(response.data.title);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })  
    }) 
      
    // axios
    //   .get(charactersData.homewolrd)
    //   .then(function (response) {
    //     console.log(response)
    //     homeworld.push(response.data.title)
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })   
      
    // axios
    //   .get(charactersData.species)
    //   .then(function (response) {     
    //     console.log(response)
    //     species.push(response.data.title)
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })

    // axios
    //   .get(charactersData.starships)
    //   .then(function (response) {
    //     console.log(response)
    //     starships.push(response.data.title)
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })

    // axios
    //   .get(charactersData.vehicles)
    //   .then(function (response) {
    //     console.log(response)
    //     vehicles.push(response.data.title)
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
      
  };

  useEffect(() => {
    if (showMoreData ) {
        getData(); 
    }
  },[showMoreData])

  useEffect(() => {
    console.log(films)
  },[films])

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
                <p>{films ? films.map((film) => film) : ""}</p>
              </div>
              <div className={ModalStyle.modal_data}>
                <p>Homeworld:</p>
                <p>{homeworld ? homeworld.map((world) => world) : ""}</p>
              </div>
              <div className={ModalStyle.modal_data}>
                <p>Species:</p>
                <p>{species ? species.map((species) => species) : ""}</p>
              </div>
              <div className={ModalStyle.modal_data}>
                <p>Starships:</p>
                <p>{starships ? starships.map((starship) => starship) : ""}</p>
              </div>
              <div className={ModalStyle.modal_data}>
                <p>Vehicles:</p>
                <p>{vehicles ? vehicles.map((vehicle) => vehicle) : ""}</p>
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
