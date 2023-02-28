import React from 'react'
import { View, Dimensions,ImageBackground,StyleSheet } from 'react-native'

const { width } = Dimensions.get('window');

const LayoutTemplate = ({children}) => {
    
    

  return (
    <View style={styles.container}>
        <ImageBackground
        style={styles.ImageBackground}
        source={require("../../assets/images/app_bg.jpg")}
      >
        {children}
      </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
   
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