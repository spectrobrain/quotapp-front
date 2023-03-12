import React from "react";
import { View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import {useMonthlyQuota} from '../../../hooks/useMonthyQuota'

import SliderHorizontal from './SliderHorizontal'



const ChartViewMonth = () => {
  const generatorKey= Math.floor(Math.random()*100000)

const {yearMonths} = useMonthlyQuota()
console.log('desde charviewMonth',yearMonths)
  // const [fontsLoaded] = useFonts({
  //   Roboto: require("../../../../assets/fonts/Roboto-Light.ttf"),
  // });
    //   return null;
  // }

   const yearMonthMap = yearMonths?.map((item) => console.log(item.salesTotal))
  
  return (
    <View style={styles.chartView}>
     
      { yearMonths ? yearMonths?.map((item,index)=> <SliderHorizontal key={`${index}-${generatorKey}`} month={item.month} salesTotal={item.salesTotal} quota={item.quotaMonth} prom={item.prom}  />): null }  
  </View>
  )
}











  

  //const { sliderProgress } = styles;
  

 


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



export default ChartViewMonth;