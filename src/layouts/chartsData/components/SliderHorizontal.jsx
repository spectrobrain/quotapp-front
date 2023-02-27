import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {  View, StyleSheet} from "react-native";


const SliderHorizontal = () => {
  //console.log(textporcentage)
//   const { sliderView,shadowSliderView,sliderProgress}= styles
  return (
    
      
        <LinearGradient
        //   style={{...sliderProgress,height:'80%'}} destructuracion para hacer dinaico el slider
          style={styles.sliderProgress}
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
    width: "80%",
    height: "100%",
    borderRadius: 20,

    backgroundColor: "#0a667d",
  },
  sliderProgress: {
    flexDirection: "column",
    alignItems:'flex-end',
    width: "60%",
    height:'90%',
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