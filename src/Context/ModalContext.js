import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [modalActive, setModalActive] = useState(false); 
    const [charactersData, setCharactersData] = useState();

    return (
      <ModalContext.Provider
        value={{
          modalActive,
          setModalActive,
          charactersData,
          setCharactersData,
        }}
      >
        {children}
      </ModalContext.Provider>
    );
};

export const useModalContext = () => {
    return useContext(ModalContext)
}