import {useState,useEffect} from 'react'
import { getData} from '../../service/serviceGift'

export const useFetchGifts = ( category ) => {
  const [categories, setCategories] = useState([]);
  

  const getCate = async () => {
    const categorias = await getData();
    setCategories(categorias);
    
  };
  
  return {
    categories,
    getCate,
    
  };
};