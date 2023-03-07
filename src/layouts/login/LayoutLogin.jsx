import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Dimensions,
} from "react-native";
import LayoutBannerLogin from "./LayoutBannerLogin";
import { user } from "../../services/Data.json";
import { useFonts } from "expo-font";

const { width, height } = Dimensions.get("window");
import LayoutTemplate from "../LayoutTemplate";

const LayoutLogin = ({ navigation }) => {
  let ScreenHeight = Dimensions.get("window").height;
  let ScreenWidth = Dimensions.get("window").width;


  // const { email, password } = user;
  // console.log(email, user);
                                
  const [passwordUser, setPasswordUser] = useState();
  const [emailUser,setEmailUser]= useState();

  const handledButtonLogin = () => {
    //if (emailUser == email && passwordUser == password) {
      navigation.navigate("LayoutWellcome");
   // }
  };

  const [fontsLoaded] = useFonts({
    Roboto: require("../../../assets/fonts/Roboto-Light.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <LayoutTemplate>
      <LayoutBannerLogin />
    
      <View style={styles.formLoginContainer}>
        <TextInput
          style={styles.inputTextEmail}
          value={emailUser}
          placeholder="Enter Email..."
          placeholderTextColor="#82888C"
          onChangeText={(text) => setEmailUser(text)}
        />
        <TextInput
          style={styles.inputTextPassword}
          value={passwordUser}
          placeholder="Enter Password..."
          placeholderTextColor="#82888C"
          secureTextEntry
          borderLefthWidth="1"
          onChangeText={(text) => setPasswordUser(text)}
        />

        <Pressable style={styles.button} onPress={() => handledButtonLogin()}>
          <Text style={styles.textbutton}>Login</Text>
        </Pressable>
      </View>
    </LayoutTemplate>
  );
};

const styles = StyleSheet.create({
  formLoginContainer: {
    display: "flex",
    width: "100%",
    height: "60%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    elevation:3
  },

  inputTextEmail: {
    color: "#FFF",
    paddingLeft: 15,
    marginTop: "15%",
    width: "70%",
    height: "12%",
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 25,
    fontSize:12,
    borderLefthWidth:"5",
    

    //estoy modificando los estilos en el imput carlos//
  },
  inputTextPassword: {
    color: "#FFF",
    marginTop: "6%",
    paddingLeft: 15,
    width: "70%",
    height: "12%",
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 25,
    fontSize:12,
   
    //estoy modificando los estilos en el imput carlos//
  },
  link: {
    color: "blue",
  },
  button: {
    backgroundColor: "#3ed9f4",
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    height: "12%",
    borderRadius: 40,
    marginTop: "16%",
  },
  textbutton: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold",
  },
});

export default LayoutLogin;
