import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";
import SliderHorizontal from './SliderHorizontal'
import { quotes } from "../../../services/Data.json";

//import ContextItem from "../../../contexts/itemContext/ContextItem";
//import SliderHorizontal from "../components/SliderHorizontal";

const ChartView = (                                                                                                                                  ) => {
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
    <View style={styles.chartView}>
    
      
      <SliderHorizontal/>
      <SliderHorizontal/>
      <SliderHorizontal/>
      <SliderHorizontal/>
      <SliderHorizontal/>
      <SliderHorizontal/>
      
     
      
    </View>
  );
};

const styles = StyleSheet.create({
  chartView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: "45%",
    borderRadius: 10,
    marginTop: '3%',
    backgroundColor: "#fff",
  },
  sliderView: {
    flexDirection: "column",
    width: "90%",
    height: "50%",
    borderRadius: 20,
    backgroundColor: "#036481",
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

export default ChartView;
