import React from "react";
import { View, Image, StyleSheet, Text, ImageBackground, Dimensions } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
const { width, height } = Dimensions.get('window');

const LayoutBannerLogin = () => {

  return (
    <View style={scaledStyles.container}>
    <ImageBackground style={scaledStyles.ImBackgound}
        source={require("../../../assets/images/login_bg.png")}>
            <View style={styles.textView}>
                <Image
                    source={require("../../../assets/images/logo.png")}
                    style={scaledStyles.Imagen}
                ></Image>
                <Text style={scaledStyles.textoImagen}>Welcome to your sales assistant</Text>
            </View>
    </ImageBackground>
    </View>
  );
};

export default LayoutBannerLogin;

const scaledStyles = ScaledSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
  },
  ImBackgound: {
    //flex:1,
    width: width,
    height: height / 2
  },
  Imagen: {
    // flex: 1,
    width: width / 2,
    height: height / 9,
    justifyContent: 'center'
  },
  textoImagen: {
    // flex: 1,
    // width: '50%',
    // height: '50%',
    fontSize: '18@ms0.3',
    color: '#1592b9',
    fontWeight: 'bold',
    textAlign: 'center',
    // resizeMode: 'contain',
  }
});

const styles = StyleSheet.create({
    // logo: {
    //     height: 410,
    //     width: 410,
    // },
    textView: {
      position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        
      },
      imageText: {
        flex:1,
        fontSize: 30,
        color: '#1592b9',
        fontWeight: 'bold',
        textAlign: 'center',
        resizeMode: 'contain',
      },
})
