import ContextItem from "./ContextItem";
import { useState } from "react";
import { getDataService } from "../../services/serviceFetch";

const ItemState = ({ children }) => {
  const [jobs, setJobs] = useState();
  
  const getData = async () => {
    const newData = await getDataService();
    setJobs(newData);
  };

  return (
    <ContextItem.Provider
      value={{  getData,  }}
    >
      {children}
    </ContextItem.Provider>
  );
};

export default ItemState;
