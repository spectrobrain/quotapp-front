import React, { useState} from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, Pressable  } from 'react-native';
import LayoutBannerLogin from './LayoutBannerLogin';
import { ScaledSheet } from "react-native-size-matters";
//import { user } from '../../services/Data.json';
import { useFonts } from 'expo-font';
import LayoutWellcome from '../wellcome/LayoutWellcome';

const LayoutLogin= ({navigation}) => {

  //const { email, password } = user;


  const [emailUser, setEmailUser] = useState("");
  const [passwordUser, setPasswordUser] = useState();
  console.log(emailUser, passwordUser);

    const handledButtonLogin  = () =>  {
    //   if(emailUser == email && passwordUser == password){
        navigation.navigate("LayoutWellcome")  
    // }
    }
  };

  const [fontsLoaded] = useFonts({
    Roboto: require("../../../assets/fonts/Roboto-Light.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={scaledStyles.container}>
      <ImageBackground
        style={scaledStyles.ImaBackground}
        source={require("../../../assets/images/app_bg.jpg")}
      >
        <LayoutBannerLogin />
        <View style={[styles.container, {flex:1}]}>
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

            <Pressable
              style={styles.button}
              onPress={() => handledButtonLogin()}
            >
              <Text style={styles.textbutton}>Login</Text>
            </Pressable>

            {/* <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Text>Don't have an account? </Text>
              {/* <TouchableOpacity onPress={() => navigation.navigate("Home")}> */}
              {/* <Text>Home</Text> */}
              {/* </TouchableOpacity> */}
            {/* </View>  */}
          </View>
        </View>
        {/* </Home> */}
      </ImageBackground>
    </View>
  );


const scaledStyles = ScaledSheet.create({
  container: {
    flex: 4,
    width: width,
    height: height,
  },
  ImaBackground: {
    // flex: 1,
    width: width,
    height: height,
  },
});



export default LayoutLogin;
