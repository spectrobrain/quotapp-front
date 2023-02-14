import React from "react";
import { Text, View, ImageBackground, Image, Dimensions } from "react-native";
import LayoutBannerLogin from "../login/LayoutBannerLogin";
import { ScaledSheet } from "react-native-size-matters";
const { width, height } = Dimensions.get('window');

const LayoutWellcome = ({ navigation }) => {
  return (
    // <View style={scaledStyles.container}>
      
      <ImageBackground
        style={[scaledStyles.ImaBackground, {flex:1}]}
        source={require("../../../assets/images/app_bg.jpg")}
      >
         <LayoutBannerLogin />
         {/* <View> */}
      <Text style={{ fontSize: 20, color: "#fff" }}>Estamos en WELLCOME</Text>
      {/* </View> */}
      </ImageBackground>
      
    // </View>
  );
};

const scaledStyles = ScaledSheet.create({
  container: {
    //flex: 1,
    width: width,
    height: height,
  },
  ImaBackground: {
    // flex: 1,
    width: width,
    height: height,
  },
});


export default LayoutWellcome;
