import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const LayoutTipsRobot= ({children}) => {
  return (
    
    <View>
    <Text> Tips Robot</Text>
   
    <LinearGradient
    style={styles.background}
    colors={["#013157","#019CAE"]}
    end={{x:1.5 , y: 1.5 }}
     start={{ x: 0.1 , y: 0.6 }}
     //locations={[ 0.3,0.2,0.65]}
  />
    
    </View>
    
    
    
      
   
  );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        padding: 24,
        
      },
}); 

export default LayoutTipsRobot;