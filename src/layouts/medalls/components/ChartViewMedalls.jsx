import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, Text ,Image} from "react-native";
import { useFonts } from "expo-font";

import { quotes } from "../../../services/Data.json";

//import ContextItem from "../../../contexts/itemContext/ContextItem";
//import SliderHorizontal from "../components/SliderHorizontal";

const ChartViewMedalls = (                                                                                                                                  ) => {
//   const dataUser = useContext(ContextItem); //data
const {
  textMonthChart,
  chartSlider,
} = styles
  const [fontsLoaded] = useFonts({
    Roboto: require("../../../../assets/fonts/Roboto-Light.ttf"),
  });

  //   return null;
  // }

  const [item] = quotes;

  //const { sliderProgress } = styles;
  

  return (
    
       <Image
          style={styles.imageLogo}
          source={require("../../../../assets/images/dialogo1rd.png")}
        ></Image>
      
    
  );
};

const styles = StyleSheet.create({
  chartView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "55%",
    borderRadius: 10,
    marginTop: '3%',
    
  },
  imageLogo: {
    marginTop:'17%',
    display:'flex',
    width: '86%',
    height:  '67%',
    backgroundColor:'yellow'
    
  },
  textMonthChart: {
    fontSize: 12,
  },
  shadowSliderView: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity:1,
    shadowRadius: 5,
    elevation:15,    
  },
});

export default ChartViewMedalls;
