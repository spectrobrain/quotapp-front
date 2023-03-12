import React from "react";

import { View, Image, StyleSheet, Text, ImageBackground, Dimensions } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
const { width, height } = Dimensions.get('window');
import { useFonts } from "expo-font";

const LayoutBannerLogin = () => {

  // const [fontsLoaded] = useFonts({
  //   Roboto: require("../../../assets/fonts/Roboto-Bold.tff"),
  // });

  // if (!fontsLoaded) {
  //   return null;
  // }
  const {imageBanner} = scaledStyles
  const heigthCalculate = height * 0.426;
  return (
   
    <ImageBackground style={{...imageBanner,height:heigthCalculate}}
        source={require("../../../assets/images/login_bg_ok.png")}>
          {/* <View  style={scaledStyles.logoContainer}> */}
                <Image
                    source={require("../../../assets/images/logo.png")}
                    style={scaledStyles.imageLogo}
                ></Image>
          
              <View style={styles.textView}>
                <Text style={scaledStyles.textoImagen}>Welcome to your sales assistant</Text>
              </View>
            {/* </Vi */}
    </ImageBackground>
    

  );
};

export default LayoutBannerLogin;

const scaledStyles = ScaledSheet.create({
  container: {
    flex: 1,
    width: width,
    height: 300,
    justifyContent: 'center',
  },
  imageBanner: {
    display: 'flex',
    flexDirection: 'column',
    width: width,
    height:height * 0.426,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    
  },
  
  imageLogo: {
    marginTop:'17%',
    display:'flex',
    width: '30%',
    height:  '20%',
    
  },
  textoImagen: {
    fontSize: '18@ms0.3',
    color: '#1592b9',
    fontWeight: 'bold',
    textAlign: 'center',
     resizeMode: 'contain',
     marginBottom:'30%'
  }
});

const styles = StyleSheet.create({
    // logo: {
    //     height: 410,
    //     width: 410,
    // },
    textView: {
      
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%'
       
        
      },
      imageText: {    
        fontSize:height *0.0426 ,
        color: '#1592b9',
        fontWeight: 'bold',
        textAlign: 'center',
        resizeMode: 'contain',
      },
})
