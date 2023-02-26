import React from 'react'
import { View, Dimensions,ImageBackground } from 'react-native'
import { ScaledSheet } from "react-native-size-matters";
const { width } = Dimensions.get('window');

const LayoutTemplate = ({children}) => {
    
    

  return (
    <View style={scaledStyles.container}>
        <ImageBackground
        style={scaledStyles.ImageBackground}
        source={require("../../assets/images/app_bg.jpg")}
      >
        {children}
      </ImageBackground>
    </View>
  )
}
const scaledStyles = ScaledSheet.create({
   
    container: {
      flex: 1,
      width: width,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    ImageBackground: {
      // flex: 1,
      width: width,
      height: '100%',
      alignItems: 'center',
    },
  });
 
    
    
   

export default LayoutTemplate