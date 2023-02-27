import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  Image,
  Dimensions,
} from "react-native";
import LayoutTemplate from "../LayoutTemplate";
import NavBottonChart from "./NavBottonChart";
import LayoutBarTop from "../LayoutBarTop";
const { width, height } = Dimensions.get("window");

const LayoutCharts = ({ navigation }) => {
  let Height = Dimensions.get("window").height;
  let Width = Dimensions.get("window").width;
  console.log(Height, Width);
  return (
    <LayoutTemplate>
      <LayoutBarTop />

     <NavBottonChart/>
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

  
  
});

export default LayoutCharts;
