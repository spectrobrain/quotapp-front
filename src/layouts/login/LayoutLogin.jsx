import React, { useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Pressable  } from 'react-native';
import LayoutBannerLogin from './LayoutBannerLogin';
import { user } from '../../services/Data.json';
import { useFonts } from 'expo-font';
import LayoutWellcome from '../wellcome/LayoutWellcome';

const LayoutLogin= ({navigation}) => {

  const { email, password } = user;

    const [emailUser, setEmailUser] = useState("");
    const [passwordUser, setPasswordUser] = useState();
    console.log(emailUser, passwordUser);

    const handledButtonLogin  = () =>  {
      if(emailUser == email && passwordUser == password){
        navigation.navigate("LayoutWellcome")
      }
    }

    const [fontsLoaded] = useFonts({
        'Roboto': require('../../../assets/fonts/Roboto-Light.ttf'),
    });

   if (!fontsLoaded) {
    return null;
  }

  return (
    
    <ImageBackground style={{width: '100%', height: 690}}
    source={require("../../../assets/images/app_bg.jpg")}>
    <LayoutBannerLogin />
    <View style={styles.container}>
      <View style={styles.wrapper}>
        
        <TextInput
          style={styles.input}
          value={emailUser}
          placeholder="Enter Email..."
          placeholderTextColor="#FFF"
          onChangeText={(text) => setEmailUser(text)}
        />
        <TextInput
          style={styles.input}
          value={passwordUser}
          placeholder="Enter Password..."
          placeholderTextColor="#FFF"
          secureTextEntry
          onChangeText={(text) => setPasswordUser(text)}
        />

        <Pressable style={styles.button}  onPress={() => handledButtonLogin()}>
            <Text style={styles.textbutton}>Login</Text>

        </Pressable>

        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Text>Don't have an account? </Text>
          {/* <TouchableOpacity onPress={() => navigation.navigate("Home")}> */}
            <Text>Home</Text>
          {/* </TouchableOpacity> */}
        </View>
      </View>
    </View>
    {/* </Home> */}
    </ImageBackground>
  )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
    },
    wrapper: {
      width: "80%",
    },
    input: {
      marginTop: 5,
      marginBottom: 15,
      borderWidth: 3,
      borderColor: "#bbb",
      borderRadius: 30,
      paddingHorizontal: 12,
      paddingVertical: 15,
      textShadowColor: "#fff",
      color: "#fff",
    },
    link: {
      color: "blue",
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
      
    },
    textbutton: {
      color: "#fff",
      fontSize: 25,
      letterSpacing: 5,
      fontWeight: "bold",
    }
  });

export default LayoutLogin;