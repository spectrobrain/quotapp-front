import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Dimensions,
} from "react-native";
import LayoutTemplate from "../LayoutTemplate";
import * as Amigatable from "react-native-animatable";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import LayoutBarTop from "../LayoutBarTop";
const { width, height } = Dimensions.get("window");

const LayoutWellcome = ({ navigation }) => {
  let Height = Dimensions.get("window").height;
  let Width = Dimensions.get("window").width;
  console.log(Height, Width);
  return (
    <LayoutTemplate>
      <LayoutBarTop />

      {/* imagen donde va el texto que cambia */}
      <View style={styles.containerMessageGlobal}>
        <View style={styles.containerMessage}>
          <Text style={styles.textMessage}>
            Hello, wellcome, I am your sales assistant, I am here to motivate
            you and help you achieve your goals !
          </Text>
        </View>
         <View style={styles.containerIcon}>
          <AntDesign  name="caretdown" size={80} color="grey" />
          </View>
      </View>
      {/* animacion del robot  */}
      {/* <View>
        <Amigatable.Image
          animation="zoomIn"
          iterationCount={1}
          direction="normal"
          duration={20000}
          source={require("../../../assets/images/MASCOT.gif")}
          style={{
            width: "100%",
            height: "45%",
            resizeMode: "contain",
            marginVertical: 40,
          }}
        />

      {/*icono cambio de texto*/}
      {/* <Pressable style={styles.iconChevron}>
          <Entypo name="chevron-right" size={60} color="white" />
        </Pressable>  */}
      {/* </View> */} 
    </LayoutTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: width,
    height: "100%",
  },

  containerHeader: {
    width: "100%",
    height: "11%",
  },

  containerMessageGlobal: {
    display: "flex",
    justifyContent: "center",
    alignItems:'flex-start',
    flexWrap:'wrap',
    flexDirection: "row",
    marginTop: "13%",
    height: "40%",

    backgroundColor: "yellow",
  },
  containerMessage: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    borderRadius: 1,
    backgroundColor: "#fff",
    width: "auto",
    height: "auto",
    marginTop: "10%",
    marginLeft: "10%",
    marginRight: "10%",
    
    alignItems: "center",
    
    justifyContent: "flex-start",
  },
  container4: {
    size: 30,
    color: "#ffff",
    borderEndWidth: 4,
    borderColor: "#272727",
    bottom: 0,
  },
  containerIcon:{
    displey:'flex',
    flexDirection:'column',
    backgroundColor: "red",
    justifyContent:'flex-start',
    alignContent: 'flex-start',
    height:75
  },
  logoMtq: {
    marginLeft: 15,
    marginTop: 30,
    width: 85,
    height: 30,
  },

  textMessage: {
    margin: "10%",
    textAlign: "justify",
    backgroundColor: "grey",
  },
  iconXblack: {
    width: 800,
    height: 500,
    position: "absolute",
    top: 20,
    left: 360,
    right: 0,
  },
  iconChevron: {},
  iconMesaggeCaret: {
    
    flexDirection: "row",
    width: width,
    height: 65,
    
    backgroundColor: "grey",
  },
});

export default LayoutWellcome;
