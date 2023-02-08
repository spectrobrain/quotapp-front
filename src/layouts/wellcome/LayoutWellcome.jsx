import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import LayoutBannerLogin from '../login/LayoutBannerLogin';

const LayoutWellcome= ({children}) => {
  return (
    
    <ImageBackground style={{width: '100%', height: 610}}
      source={require("../../../assets/images/app_bg.jpg")}>
        <LayoutBannerLogin />
        <Text style={{fontSize:30, color: "#fff"}}>Estamos en WELLCOME</Text>
    </ImageBackground>
    
    
    
      
   
  );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        padding: 24,
        
      },
}); 

export default LayoutWellcome;