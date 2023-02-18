import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Pressable, Image } from 'react-native';


import * as Amigatable from 'react-native-animatable';
import { Entypo } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 


const LayoutWellcome= ({navigation}) => {


   return (
   
    <ImageBackground style={styles.container}
         source={require("../../../assets/images/app_bg.jpg")}>
            <ImageBackground
              source={require("../../../assets/images/header_bg.png")}
              style={styles.container1} >
              <View>
                  <Image
                      source={require("../../../assets/images/logo.png")}
                      style={styles.logo} >
                  </Image>
                  <Pressable style={styles.ButtonIcon}  onPress={() =>   navigation.navigate("LayoutLogin")}>
                  {/* <AntDesign name="close" size={34} color="black" /> */}
                  <Feather name="x" size={34} color="black" />
                  </Pressable>
                </View>
            </ImageBackground>
              <View style={styles.container2}>
              <Text>esto es un prueva</Text>
              </View>
              <View >
              <Amigatable.Image animation="slideInDown" iterationCount={10} 
              direction="alternate-reverse"
              source={require("../../../assets/images/MASCOT.gif")} 
              style={{width: '100%', height: '50%', resizeMode: 'contain', paddingVertical: 15 }} /> 
               <View style={styles.ButtonIcon2}>
               
               <Entypo name="chevron-right" size={50} color="white" />
               </View>

              </View>     
    </ImageBackground>
   
   );
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
   }, 

   container1: {  
   width: '100%',
   height: 150,
   },

   container2:{
     marginVertical: 50,
     marginTop: 1,
     marginLeft: 100,
     borderRadius: 10,
     backgroundColor: '#fff',
     width: 200,
     height: 150,
     alignItems: 'center',
    justifyContent: 'center',
   
   },
   container3: {  
     marginLeft: 180,
     borderRadius: 30,
     backgroundColor: '#0008',
     width: 40,
     height: 50,
   },
   container4: {
     size: 30,
     color: '#ffff',
     borderEndWidth: 4,
     borderColor: '#272727',
     bottom: 0,
   },
   logo: {
     marginLeft: 25,
     marginTop: 20,
     width: 80,
     height: 30,
   },

   TextX: {
     width: 800,
     height: 500,
     position: 'absolute',
     top: 25,
     left: 370,
     right: 0,
   },
   ButtonIcon: {
     width: 800,
     height: 500,
     position: 'absolute',
     top: 20,
     left: 360,
     right: 0, 

   },
   ButtonIcon2: {
    width: 800,
    height: 500,
    position: 'absolute',
    top: 20,
    left: 330,
    right: 0, 

  },

  

  

}); 
 



export default LayoutWellcome;
