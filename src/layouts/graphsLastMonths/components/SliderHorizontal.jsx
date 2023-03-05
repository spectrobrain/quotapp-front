import React from "react";
import { LinearGradient } from "expo-linear-gradient";
//import  {quotes}  from "../../../services/Data.json";

import {   StyleSheet,View,Text} from "react-native";


const SliderHorizontal = () => {
  
  const { sliderProgress,
          sliderView,
          shadowSliderView,
          textMonthChart,
          textMonthquote,
          sliderViewContainer}= styles
  return (
    <View style={sliderViewContainer}>
    <View style={[   sliderView,shadowSliderView]}>
      
        <LinearGradient
        style={{...sliderProgress,width:'67%'}} //destructuracion para hacer dinaico el slider
          
          colors={["#51e7fb", "#0185f2"]}
          end={{ x: 1, y: 1.2 }}
          start={{ x: 1, y: 0.1 }}
          locations={[0.1, 0.9]}
        />
        
      </View>  
      <Text style={textMonthChart}>JAN-<Text style={textMonthquote}>6.000</Text>/12.000</Text>
      </View>
      //#1ca9f2
      
  );
};
const styles = StyleSheet.create({
  sliderViewContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "90%",
    height: "13%",
    borderRadius: 10,
    marginTop: '1%',
    
    
  },
  sliderView: {
    flexDirection: "column",
    width: "37%",
    height: "75%",
    borderRadius: 20,
    backgroundColor: "#036481",
  },
  sliderProgress: {
    flexDirection: "column",
    alignItems:'flex-end',
    
    height:'92%',
    margin: 1,
    borderRadius: 20,
   
  },
  textMonthChart: {
    fontSize: 12,
    marginLeft:'3%'
  },
  textMonthquote: {
    fontSize: 12,
    color:'#0185f2'
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