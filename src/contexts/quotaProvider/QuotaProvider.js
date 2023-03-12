import QuotaContext from "./QuotaContext";
import { useState } from "react";
//import { getDataService } from "../../services/serviceFetch";
import {quotes,lasttreemonths,yearbymonths} from '../../services/Data.json'

const QuotaProvider = ({ children }) => {

  const [quotasData, setQuotasData] = useState();
  const [quotas, setQuotas] = useState(quotes);
  const [quotasYear,setQuotasYear] = useState(yearbymonths)
  
  // const getData = async () => {
  //   const newData = await getDataService();
  //   setQuotasData(newData);
  //   console.log('desde QuotaProvider',newData)
  // };
  

  return (
    <QuotaContext.Provider
      value={{  quotasData ,quotas,quotasYear }}
    >
      {children}
    </QuotaContext.Provider>
  );
};

export default QuotaProvider;
