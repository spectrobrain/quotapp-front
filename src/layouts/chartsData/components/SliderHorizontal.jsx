import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import  {quotes}  from "../../../services/Data.json";

import {   StyleSheet} from "react-native";


const SliderHorizontal = ({sales}) => {
  
  
  const { sliderProgress}= styles
  return (
    
      
        <LinearGradient
        style={{...sliderProgress,width:`${sales}%`}} //destructuracion para hacer dinaico el slider
          
          colors={["#51e7fb", "#0185f2"]}
          end={{ x: 1, y: 1.2 }}
          start={{ x: 1, y: 0.1 }}
          locations={[0.1, 0.9]}
        />
        
      
      //#1ca9f2
      
  );
};
const styles = StyleSheet.create({
  
  sliderView: {
    justifyContent: "flex-end",
    flexDirection: "column",
    height: "100%",
    borderRadius: 20,
    backgroundColor: "#0a667d",
  },
  sliderProgress: {
    flexDirection: "column",
    alignItems:'flex-end',
    width: "80%",
    height:'92%',
    margin: 1,
    borderRadius: 20,
   
  },
  shadowSliderView: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity:1,
    shadowRadius: 5,
    elevation:8,
      
  },
  

});

export default SliderHorizontal;