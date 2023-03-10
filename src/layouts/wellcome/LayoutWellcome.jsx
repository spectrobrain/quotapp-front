import React,{ useEffect, useState } from "react"
import { StyleSheet, View, Pressable, Dimensions } from "react-native"
import LayoutTemplate from "../LayoutTemplate"
import * as Amigatable from "react-native-animatable"
import { Entypo,AntDesign } from "@expo/vector-icons"
import LayoutBarTop from "../LayoutBarTop"
import WellcomeMessage from "./components/WellcomeMessage"
import { messages } from '../../services/messages'
const { width, height } = Dimensions.get("window")

const LayoutWellcome = ({ navigation }) => {
  const {
    containerIcon,
    containerGift,
    giftRobot,
    iconChevron,
    container,
  } = styles

  const [messagesWellcome,setMessagesWellcome] =useState(messages.message1)
  const [messageId,setMessageId] = useState(0)
  const [routeLayout,setRouteLayout] = useState()
 
  useEffect(() => {
    messageId === 1 && setMessagesWellcome(messages.message2);
    messageId === 2 && setMessagesWellcome(messages.message3);
    messageId === 2 && setRouteLayout("LayoutCharts");
  }, [messageId])
  
  const handleIconCaretChevron = () => {
    setMessageId(messageId+1)
  routeLayout ? navigation.navigate("LayoutCharts") : null ;  
}

  return (
    <LayoutTemplate>
      <LayoutBarTop navigation={navigation} />

      <View style={container}>
        <WellcomeMessage message= {messagesWellcome}/>
        <Pressable style={containerIcon}>
            <AntDesign name="caretdown" size={80} color="white" />
          </Pressable>
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
  containerIcon: {
    width:width,
    displey: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: -(height *0.0411),
    zIndex: 1,
    height: height * 0.109,
   
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
    marginVertical: height * 0.0568,
  },
  iconMesaggeCaret: {
    flexDirection: "row",
    width: width,
    height: height * 0.0923,
  },
})

export default LayoutWellcome
