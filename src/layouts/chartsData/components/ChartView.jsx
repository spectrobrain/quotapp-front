import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";
import { quotes } from "../../../services/Data.json";

import ContextItem from "../../../contexts/itemContext/ContextItem";
import SliderHorizontal from "../components/SliderHorizontal";

const ChartView = ({ children, salesInfo }) => {
//   const dataUser = useContext(ContextItem); //data
  const [fontsLoaded] = useFonts({
    Roboto: require("../../../../assets/fonts/Roboto-Light.ttf"),
  });

  //   return null;
  // }

//   const [item] = quotes;

  //const { sliderProgress } = styles;
  //const [dataManager, setDataManager] = useState(salesInfo);

//   const getData = () => {
//     {
//       setDataManager((prev) => {
//         return {
//           ...prev,
//           leftTextTop: dataManager.title,
//           rightTextTop: dataManager.sales,
//           rightTextBottom: dataManager.description,
//         };
//       });
//     }
//   };
//   useEffect(() => {
//     getData();
//   }, []);

  return (
    <View style={styles.chartView}>
      {/* <View style={styles.textViewTop}>
        <Text style={styles.leftText}>{dataManager?.leftTextTop}</Text>
        <Text style={styles.rightText}>{dataManager?.rightTextTop}%</Text>
      </View> */}
      <View style={[styles.sliderView,styles.shadowSliderView]}>
        <SliderHorizontal/>
      </View>
      {/* <View style={styles.textViewTop}>
        <Text style={styles.rightTextBotton}>{dataManager?.rightTextBottom}</Text>
      </View>
      <View style={styles.viewText}></View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  chartView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: "15%",
    borderRadius: 10,
    marginTop: '3%',

    backgroundColor: "#fff",
  },
  sliderView: {
    flexDirection: "column",
    width: "90%",
    height: "25%",
    borderRadius: 20,
    backgroundColor: "#036481",
  },
 
  textViewTop: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  leftText: {
    flex: 1,
    textAlign: "left",
    fontSize:12
  },
  rightText: {
    flex: 1,
    textAlign: "right",
    fontSize:12
  },
  rightTextBotton: {
    flex: 1,
    textAlign: "right",
    fontSize:12,
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
    elevation:15,
      
  },
});

export default ChartView;
