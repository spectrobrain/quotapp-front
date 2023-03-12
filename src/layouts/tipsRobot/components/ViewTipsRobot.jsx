import React, { useState, useEffect, useContext } from "react"
import { View, StyleSheet, Text, Image } from "react-native"
import { useFonts } from "expo-font"

const ViewTipsRobot = () => {
  const { tipsView, textTip } = styles
  const [fontsLoaded] = useFonts({
    Roboto: require("../../../../assets/fonts/Roboto-Light.ttf"),
  })

  //   return null;
  // }



  return (
    <View style={tipsView}>
      <Text style={textTip}>
        When thequality of the relationship between the buyer and de seller
        moves toward a strategic partnership, the selling strategy gets more
        involved than even consultative selling. In strategic-partner selling,
        both parties invest resources and share their expertise with each other
        to create solutions than jointly grow one another's bussines
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  tipsView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: "auto",
    borderRadius: 30,
    marginTop: "7%",
    marginLeft: "6%",
    marginRight: "6%",

    backgroundColor: "#fff",
  },
  textTip: {
    margin: "10%",
    textAlign: "justify",
    fontSize: 12,
    color: "#0185f2",
  },
})

export default ViewTipsRobot
