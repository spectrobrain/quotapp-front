import ContextQuota from "./QuotaContext";
import { useState } from "react";
import { getDataService } from "../../services/serviceFetch";

const ItemState = ({ children }) => {
  const [jobs, setJobs] = useState();
  
  const getData = async () => {
    const newData = await getDataService();
    setJobs(newData);
  };

  return (
    <ContextQuota.Provider
      value={{  getData,  }}
    >
      {children}
    </ContextQuota.Provider>
  );
};

export default ItemState;
