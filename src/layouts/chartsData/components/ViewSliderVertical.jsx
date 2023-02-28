import { View, Text,StyleSheet } from "react-native";
import SliderVertical from "./SliderVertical";
import { useFonts } from "expo-font";
import React from "react";

const ViewSliderVertical = () => {
  const {
    textMonthChart,

    chartSlider,
  } = styles;

  const [fontsLoaded] = useFonts({
    Roboto: require("../../../../assets/fonts/Roboto-Light.ttf"),
  });

  //   return null;
  // }
  return (
    <View style={chartSlider}>
      <Text style={textMonthChart}>90%</Text>
      <SliderVertical />
      <Text style={textMonthChart}>Jan</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  chartSlider: {
    justifyContent: "center",
    alignItems: "center",
    width: "25%",
    height: "100%",
    marginLeft: 10,
   
  },
  textMonthChart: {
    fontSize: 12,
  },
});

export default ViewSliderVertical;