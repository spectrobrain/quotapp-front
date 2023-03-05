import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, Text ,Image} from "react-native";
import { useFonts } from "expo-font";

import { quotes } from "../../../services/Data.json";

//import ContextItem from "../../../contexts/itemContext/ContextItem";
//import SliderHorizontal from "../components/SliderHorizontal";

const ChartViewTipsRobot = (                                                                                                                                  ) => {
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
       <Text style={styles.textTip}>When thequality of the relationship 
       between the buyer and de seller moves toward a strategic 
       partnership, the selling strategy gets more involved than even
        consultative selling. In strategic-partner selling, both
        parties invest resources and share their expertise with each 
        other to create solutions than jointly grow one another's bussines
        
        </Text>
    </View>  
    
  );
};

const styles = StyleSheet.create({
  chartView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: "auto",
    borderRadius: 30,
    marginTop: '7%',

    backgroundColor: "#fff",
    
  },
  textTip: {
    margin: "10%",
    textAlign: "justify",
    fontSize: 12,
    color:"#0185f2"
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

export default ChartViewTipsRobot;
