
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Pressable,
  Dimensions,
} from "react-native";
import LayoutBannerLogin from "./LayoutBannerLogin";
import { user } from "../../services/Data.json";
import { useFonts } from "expo-font";
import { ScaledSheet } from "react-native-size-matters";
const { width, height } = Dimensions.get('window');


const LayoutLogin = ({ navigation }) => {
  let ScreenHeight = Dimensions.get("window").height;

  const { email, password } = user;

  const [emailUser, setEmailUser] = useState("");
  const [passwordUser, setPasswordUser] = useState();
  console.log(emailUser, passwordUser);


  const handledButtonLogin = () => {
    if (emailUser == email && passwordUser == password) {
      navigation.navigate("LayoutWellcome");
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
          
           <TouchableOpacity style={{color: 'blue',}}>
            <Pressable
              style={styles.button}
              onPress={() => handledButtonLogin()}
            >
              <Text style={styles.textbutton}>Login</Text>
            </Pressable>
            </TouchableOpacity>
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
};

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

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
  },
  wrapper: {
    width: width,
    height: height / 6,
  },
  input: {
    // marginTop: 1,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: "#bbb",
    borderRadius: 30,
    paddingHorizontal: 12,
    paddingVertical: 15,
    textShadowColor: "#fff",
    color: "#fff",
    //estoy modificando los estilos en el imput carlos//
    marginLeft: 40,
    marginRight: 40,
   
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
    borderRadius: 40,
    elevation: 3,
    marginTop: 10,
    //esto lo modifique por la apariencia //
    marginLeft: 40,
    marginRight: 40,
  },
  textbutton: {
    color: "#fff",
    fontSize: 25,
    letterSpacing: 5,
    fontWeight: "bold",
  },
});

export default LayoutLogin;
