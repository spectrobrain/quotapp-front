import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native';
import LayoutBannerLogin from '../login/LayoutBannerLogin';
import LayoutYearChart from '../LayoutYearChart';


const LayoutWellcome= ({navigation}) => {

  const handledButtonYear  = () =>  {
    
        navigation.navigate("LayoutYearChart")
 
    }

  return (
    
    <ImageBackground style={{width: '100%', height: 610}}
      source={require("../../../assets/images/app_bg.jpg")}>
        <LayoutBannerLogin />
        <Text style={{fontSize:30, color: "#fff"}}>Estamos en WELLCOME</Text>
        <Pressable style={styles.button} onPress={() => handledButtonYear()}  >
            <Text style={styles.textbutton}>yearChart</Text>

        </Pressable>
    </ImageBackground>
   
   );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        padding: 24,
        
      },
      button: {
        backgroundColor: "#3ed9f4",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 50,
        elevation: 3,
        marginTop: 40,
        
      }
}); 
 



export default LayoutWellcome;
