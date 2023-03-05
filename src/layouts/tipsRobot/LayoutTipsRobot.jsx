import * as React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

import LayoutTemplateCharts from '../LayoutTemplateCharts';
const { width, height } = Dimensions.get("window");
import ChartViewTipsRobot from './components/ChartViewTipsRobot';
import { Entypo } from '@expo/vector-icons';
const LayoutTipsRobot= ({children}) => {
  return (
    <LayoutTemplateCharts>
      <ChartViewTipsRobot/>
        <View style={styles.iconMessage}>
        <Entypo name="triangle-down" size={50} color="white" />
        </View>
      <View style={styles.viewGiftLogo}>
        <Image
          style={styles.imageGifRobot}
          source={require("../../../assets/images/MASCOT.gif")}
        />
        </View>
    </LayoutTemplateCharts>
   
    
    
    
    
      
   
  );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        padding: 24,
        
      },
      viewGiftLogo: {
        justifyContent: "center",
        alignItems: "flex-end",
        paddingRight: '11%',
        width: width,
        height: "20%",
        marginTop:'3%'
       
      },
      iconMessage: {
        width:width,
        height:'4.9%',
        flexDirection:'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        marginRight:'42%',
        marginTop:-16, 
        zIndex: 1    
        
      },

      imageGifRobot: { 
        width: "38%",
        height: '99%', 
             
      },
}); 

export default LayoutTipsRobot;