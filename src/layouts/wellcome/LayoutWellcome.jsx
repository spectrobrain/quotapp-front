
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Pressable, Image } from 'react-native';


import * as Amigatable from 'react-native-animatable';
import { Entypo } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';


const LayoutWellcome= ({navigation}) => {


    return (
   
      <ImageBackground style={styles.container}
              source={require("../../../assets/images/app_bg.jpg")}>
            <ImageBackground
              source={require("../../../assets/images/header_bg.png")}
              style={styles.containerHeader} >
              <View>
                  <Image
                      source={require("../../../assets/images/logo.png")}
                      style={styles.logoMtq} >
                  </Image>
                  <Pressable style={styles.iconXblack}  onPress={() =>   navigation.navigate("LayoutLogin")}>
                  <Feather name="x" size={34} color="black" />
                  </Pressable>
              </View>
            </ImageBackground>
             {/* imagen donde va el texto que cambia */}
              <View style={styles.containerMessage}>
                <Text style={styles.textMessage}>Lorem Ipsum is simply dummy text of the printing and typesetting industry and typesetting industry.</Text>
                </View>
                <View style={styles.iconMesaggeCaret}>
                <AntDesign name="caretdown" size={74} color="white" />
              </View>
               {/* animacion del robot  */}
              <View >
                <Amigatable.Image animation="zoomIn" iterationCount={1} 
                direction="normal" duration={20000}
                source={require("../../../assets/images/MASCOT.gif")} 
                style={{width: '100%', height: '45%', resizeMode: 'contain', marginVertical: 40 }} /> 

                {/*icono cambio de texto*/}
                <View style={styles.iconChevron}>
                <Entypo name="chevron-right" size={60} color="white" />
                </View>

              </View>     
      </ImageBackground>
    );
};

const styles = StyleSheet.create({
   container: {
     flex: 1,
   }, 

   containerHeader: {  
   width: '100%',
   height: 150,
   },

   containerMessage:{
     marginVertical: 0,
     marginTop: 1,
     marginLeft: 100,
     borderRadius: 5,
     backgroundColor: '#fff',
     width: 200,
     height: 'auto',
     alignItems: 'center',
    justifyContent: 'center',
   
   },
   container3: { 
     marginHorizontal: 0, 
     marginLeft: 180,
     borderRadius: 0,
     backgroundColor: '#fff',
    
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
   logoMtq: {
     marginLeft: 25,
     marginTop: 20,
     width: 80,
     height: 30,
   },

   textMessage: {
     marginTop: 5,
     marginHorizontal: 10,
     marginVertical: 10,
   },
   iconXblack: {
     width: 800,
     height: 500,
     position: 'absolute',
     top: 20,
     left: 360,
     right: 0, 

   },
   iconChevron: {
    position: 'absolute',
    top: 120,
    left: 290,
    right: 0, 

  },
  iconMesaggeCaret: {
    marginVertical: -30,
    marginLeft: 168,
   

  },

  

  

}); 
 



export default LayoutWellcome;

