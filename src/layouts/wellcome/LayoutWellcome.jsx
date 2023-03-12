import React from "react"
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Dimensions,
} from "react-native"
import LayoutTemplate from "../LayoutTemplate"
import * as Amigatable from "react-native-animatable"
import { Entypo, AntDesign } from "@expo/vector-icons"

import LayoutBarTop from "../LayoutBarTop"
const { width, height } = Dimensions.get("window")

const LayoutWellcome = ({ navigation }) => {
  const {
    containerMessageGlobal,
    containerMessage,
    textMessage,
    containerGift,
    containerIcon,
    giftRobot,
    iconChevron,
    container,
  } = styles

  const handleIconCaretChevron = () => {
    navigation.navigate("LayoutCharts")
  }
  return (
    <LayoutTemplate>
      <LayoutBarTop navigation={navigation}/>

      <View style={container}>
        <View style={containerMessageGlobal}>
          <View style={containerMessage}>
            <Text style={textMessage}>
              Hello, wellcome, I am your sales assistant, I am here to motivate
              you and help you achieve your goals !
            </Text>
          </View>
          <Pressable style={containerIcon}
          >
            <AntDesign name="caretdown" size={80} color="white" />
          </Pressable>
        </View>
        {/* animacion del robot  */}
        <View style={containerGift}>
          <Amigatable.Image
            animation="zoomIn"
            iterationCount={1}
            direction="normal"
            duration={1000}
            source={require("../../../assets/images/MASCOT.gif")}
            style={giftRobot}
          />

          {/*icono cambio de texto*/}
          <Pressable
            style={iconChevron}
            onPress={() => handleIconCaretChevron()}
          >
            <Entypo name="chevron-right" size={60} color="white" />
          </Pressable>
        </View>
      </View>
    </LayoutTemplate>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexWrap: "wrap",
    flexDirection: "column",
    width: "100%",
    height: "100%",
   
  },

  containerMessageGlobal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "wrap",
    flexDirection: "row",

    height: "auto",
  },
  containerMessage: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    borderRadius: 10,
    backgroundColor: "#fff",
    width: "63%",
    height: "auto",
    marginTop: "10%",
    marginLeft: "10%",
    marginRight: "10%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  containerGift: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "34%",
    width: "50%",
    height: "21.5%",
  },
  giftRobot: {
    width: "66%",
    height: "100%",
    resizeMode: "contain",
    marginVertical:height * 0.0568
  },
  containerIcon: {
    displey: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: -29,
    zIndex: 1,
    height: 75,
  },
  logoMtq: {
    marginLeft: 15,
    marginTop: 30,
    width: 85,
    height: 30,
  },

  textMessage: {
    marginTop: "10%",
    marginLeft: "10%",
    marginRight: "10%",
    marginBottom: "30%",
    textAlign: "justify",
    fontSize: 12,
  },
  iconChevron: {},
  iconMesaggeCaret: {
    flexDirection: "row",
    width: width,
    height: 65,
  },
})

export default LayoutWellcome
