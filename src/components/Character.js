import CharacterStyle from "../styles/Character.module.scss";
import { MdExpandMore } from "react-icons/md"
import { useModalContext } from "../Context/ModalContext";

function Character({ data }) {
  const { setModalActive, setCharactersData } = useModalContext();

  return (
    <div className={CharacterStyle.character}>
      <p>{data.name}</p>
      <button
        onClick={() => {
          setCharactersData(data);
          setModalActive(true);
        }}
      >
        Show More Data
        <MdExpandMore />
      </button>
    </div>
  );
}

export default Character;
