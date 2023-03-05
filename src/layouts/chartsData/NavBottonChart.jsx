import { View, StyleSheet, Image, Pressable } from "react-native";
import React from "react";

const NavBottonChart = ({navigation}) => {

  const handleButtonGraphicMonths = () => {
    navigation.navigate("GraphMonths")
  }
  const handleButtonGraphicMedalls = () => {
    navigation.navigate("Medalls")
  }
  const handleButtonGraphicTipsRobot = () => {
    navigation.navigate("IATips")
  }
  return (
    <View style={styles.chartView}>
      <Pressable style={styles.viewGraph}
       onPress={()=> handleButtonGraphicMonths()}>
        <Image
          style={styles.imageGraphChart}
          source={require("../../../assets/images/icon1.png")}
         
        />
      </Pressable>
      <Pressable style={styles.viewGraph}
      onPress={()=> handleButtonGraphicMedalls ()}>
        <Image
          style={styles.imageGraph}
          source={require("../../../assets/images/icon2.png")}
        />
      </Pressable>
      <Pressable style={styles.viewGiftLogo}
      onPress={()=> handleButtonGraphicTipsRobot ()}>
        <Image
          style={styles.imageGifRobot}
          source={require("../../../assets/images/MASCOT.gif")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  chartView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "15%",
    marginTop: 10,
  },
  viewGraph: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    marginLeft: 0,
    width: "100%",
    height: "70%",
    borderColor: "#fff",
    borderRightWidth: 1,
  },
  imageGraph: {
    marginTop: 0,
    marginLeft: 0,
    width: "60%",
    height: 45,
  },
  imageGraphChart: {
    marginTop: 0,
    marginLeft: 0,
    width: "48%",
    height: 45,
  },
  viewGiftLogo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    marginLeft: 0,
    width: "33.33%",
    height: "100%",
  },
  imageGifRobot: {
    marginTop: 0,
    marginLeft: 10,
    width: "70%",
    height: 85,            
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
});

export default NavBottonChart;