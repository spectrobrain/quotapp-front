import {useState,useEffect} from 'react'

import { quotes } from "../services/Data.json";

export const useDataSeller = (  ) => {

  
  const items = quotes
  const daylysale = items.filter((item)=> item.id === 1);
  const monthlysale = items.filter((item)=> item.id === 2)
  const yearlysale = items.filter((item)=> item.id === 3)
  const [dataSeller, setDataSeller] = useState();
  const [dataMonth,setDataMonth] = useState(monthlysale);
  const [dataDaily,setDataDaily] = useState(daylysale);
  const [dataYear,setDataYear] = useState(yearlysale);
  
  
  const dataManager = () =>{
    {
      setDataDaily((prev) => {
        return {
          ...prev,
          
        };
      });
    }
   }
  useEffect(() => {
   
  }, [])
  
console.log('dataSeller',dataMonth)
 
 
 
  
  return {
    dataSeller,
   
    
  };
};