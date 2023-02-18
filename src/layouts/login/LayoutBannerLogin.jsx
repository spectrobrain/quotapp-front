import React from "react";
import { View, Image, StyleSheet, Text, ImageBackground, SafeAreaView } from "react-native";

const LayoutBannerLogin = () => {
  return (
    <SafeAreaView style = {{ flex: 1,}} >
      <View>

        <ImageBackground style={{width: '100%', height: 280}}
            source={require("../../../assets/images/login_bg.png")}>

                <View style={styles.textView}>
                    <Image
                        source={require("../../../assets/images/logo.png")}
                        style={{width: '40%', height: 50}}
                    ></Image>
                    <Text style={styles.imageText}>Welcome to your sales assistant</Text>
                </View>

        </ImageBackground>
        
      </View>
    </SafeAreaView>
  );
};

export default LayoutBannerLogin;

const styles = StyleSheet.create({
    logo: {
        height: 410,
        width: 410,
    },
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
        fontSize: 30,
        color: '#1592b9',
        fontWeight: 'bold',
        textAlign: 'center',
      },
})
