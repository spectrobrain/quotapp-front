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
import { ScaledSheet } from "react-native-size-matters";
import { Feather } from "@expo/vector-icons";
import * as Amigatable from "react-native-animatable";

const { width, height } = Dimensions.get("window");

const LayoutTemplateCharts = ({ navigation, children }) => {
  let Height = Dimensions.get("window").height;
  let Width = Dimensions.get("window").width;
  console.log(Height, Width);
  return (
    <LayoutTemplate>
      <View style={scaledStyles.containerHeader}>
        <Image
          style={scaledStyles.imageLogo}
          source={require("../../../assets/images/logo_w.png")}
        ></Image>
        <Pressable
          style={scaledStyles.iconXblack}
          onPress={() => navigation.navigate("LayoutLogin")}
        >
          <Feather style={scaledStyles.iconX} name="x" size={34} color="#fff" />
        </Pressable>
      </View>
      {children}
    </LayoutTemplate>
  );
};

const scaledStyles = ScaledSheet.create({
  container: {
    justifyContent: "center",
    width: width,
    height: "100%",
  },
  iconX: {
    marginRight: "15%",
    height: 30,
  },
  containerHeader: {
    width: width,
    height: "8%",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
   },
  imageLogo: {
    marginTop: "4%",
    marginLeft: "12%",
    width: "33%",
    height: "48%",
  },
  iconXblack: {
    alignItems: "flex-end",
    paddingRight: "3%",
    
    width: "76%",
    height: "40%",
    justifyContent: "center",
  },
});

export default LayoutTemplateCharts;
