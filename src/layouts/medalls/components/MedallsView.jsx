import React from "react"
import { View, StyleSheet } from "react-native"
import { useFonts } from "expo-font"
import { useMedalls } from "../../../hooks/useMedalls"
import CardMedall from "./CardMedall"

const MedallsView = () => {
  const { medallsView } = styles
  const generatorKey = Math.floor(Math.random() * 100000)
  const { yearTotal } = useMedalls()
  const [fontsLoaded] = useFonts({
    Roboto: require("../../../../assets/fonts/Roboto-Light.ttf"),
  })

  //   return null;
  // }
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
  }
})

export default MedallsView
