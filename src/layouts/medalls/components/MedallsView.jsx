import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, Text ,Image} from "react-native";
import { useFonts } from "expo-font";
import CardMedall from "./CardMedall";

import { quotes } from "../../../services/Data.json";


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

  const { medallsView } = styles;
  

  return (
    
      <View style={medallsView}>
        <CardMedall/>
        <CardMedall/>
        <CardMedall/>
        <CardMedall/>
        <CardMedall/>
        <CardMedall/>
        <CardMedall/>
        <CardMedall/>
        <CardMedall/>
        <CardMedall/>
        <CardMedall/>
        <CardMedall/>
      </View>
      
    
  );
};

const styles = StyleSheet.create({
  medallsView: {
    flexDirection: "row",
    flexWrap: 'wrap',
    alignItems: "center",
    
    justifyContent: "center",
    width: "73%",
    height: "50%",
    borderRadius: 10,
    marginTop: '3%',
   
  },
  imageLogo: {
    marginTop:'17%',
    display:'flex',
    width: '86%',
    height:  '67%',
    
    
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
