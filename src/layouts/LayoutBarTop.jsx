import React from "react"

import {
  View,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
  Pressable,
} from "react-native"
import { ScaledSheet } from "react-native-size-matters"
import { Feather } from "@expo/vector-icons"
const { width, height } = Dimensions.get("window")
import { useFonts } from "expo-font"

const LayoutBarTop = ({ navigation }) => {
  const heightCalculate = height * 0.1136
  const { imageBanner } = scaledStyles
  return (
    <ImageBackground
      style={{ ...imageBanner, height: heightCalculate }}
      source={require("../../assets/images/header_bg_ok.png")}
    >
      <Image
        source={require("../../assets/images/logo.png")}
        style={scaledStyles.imageLogo}
      ></Image>

      <Pressable
        style={scaledStyles.iconXblack}
        onPress={() => navigation.navigate("IconBack")}
      >
        <Feather style={scaledStyles.iconX} name="x" size={34} color="black" />
      </Pressable>
    </ImageBackground>
  )
}

export default LayoutBarTop

const scaledStyles = ScaledSheet.create({
  container: {
    backgroundColor: "yellow",
    width: width,
    height: "12%",
    justifyContent: "center",
  },
  iconX: {
    marginRight: "5%",
  },
  imageBanner: {
    display: "flex",
    flexDirection: "row",
    width: width,
    heigth: height * 0.1136,
    alignItems: "flex-start",
  },
  imageLogo: {
    marginTop: "8%",
    display: "flex",
    width: "24%",
    height: "37%",
  },
  iconXblack: {
    alignItems: "flex-end",
    alignSelf: "center",
    width: "76%",
    height: "40%",
    justifyContent: "flex-end",
  },
})
