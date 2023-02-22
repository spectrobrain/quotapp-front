import ContextItem from "./ContextItem";
import { useState,useEffect } from "react";
import { getDataService } from "../../services/serviceFetch";

export const ItemState = ({ children }) => {
  const [dataUser, setDataUser] = useState();
  const getData = async () => {
    const newData = await getDataService();
    setDataUser(newData);
  };
  useEffect(() => {
    
  getData()
  
  }, [])
  
  return (
    <ContextItem.Provider
      value={{ dataUser }}
    >
      {children}
    </ContextItem.Provider>
  );
};

export default ItemState;
