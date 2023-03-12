import React, { useState, useEffect, useContext } from "react"
import { View, StyleSheet } from "react-native"
import { useFonts } from "expo-font"
import { useMedalls } from "../../../hooks/UseMedalls"
import CardMedall from "./CardMedall"

const MedallsView = () => {
  const generatorKey = Math.floor(Math.random() * 100000)

  const { yearTotal } = useMedalls()
  console.log(yearTotal)
  const { textMonthChart, chartSlider } = styles
  const [fontsLoaded] = useFonts({
    Roboto: require("../../../../assets/fonts/Roboto-Light.ttf"),
  })

  //   return null;
  // }

  const { medallsView } = styles

  return (
    <View style={medallsView}>
      {yearTotal
        ? yearTotal?.map((item, index) => (
            <CardMedall key={`${index}-${generatorKey}`} prom={item.prom} />
          ))
        : null}
    </View>
  )
}

const styles = StyleSheet.create({
  medallsView: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",

    justifyContent: "center",
    width: "73%",
    height: "50%",
    borderRadius: 10,
    marginTop: "3%",
  },
  imageLogo: {
    marginTop: "17%",
    display: "flex",
    width: "86%",
    height: "67%",
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
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 15,
  },
})

export default MedallsView
