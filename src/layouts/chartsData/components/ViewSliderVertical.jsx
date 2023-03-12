import React from "react"
import { View, Text, StyleSheet } from "react-native"
import SliderVertical from "./SliderVertical"
import { useFonts } from "expo-font"

const ViewSliderVertical = ({ month, prom }) => {
  const {
    textMonthChart,
    chartSlider,
  } = styles
  
  const [fontsLoaded] = useFonts({
    Roboto: require("../../../../assets/fonts/Roboto-Light.ttf"),
  })

  //   return null;
  // }


  return (
    <View style={chartSlider}>
      <Text style={textMonthChart}>{prom}%</Text>
      <SliderVertical prom={prom} />
      <Text style={textMonthChart}>{month}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  chartSlider: {
    justifyContent: "center",
    alignItems: "center",
    width: "25%",
    height: "100%",
    marginLeft: 10,
  },
  textMonthChart: {
    fontSize: 10,
  },
})

export default ViewSliderVertical
