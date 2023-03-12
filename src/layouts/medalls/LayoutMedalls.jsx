import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import LayoutTemplateCharts from '../LayoutTemplateCharts';
import MedallsView from './components/MedallsView'

const LayoutMedalls= ({navigation}) => {
  const {textTitle,textDescription} = styles;
  return (
    
   <LayoutTemplateCharts navigation={navigation} iconName = "close-outline" navigateTo="LayoutCharts">
    <Text style={textTitle}>Monthly Quote</Text>
    <Text style={textDescription}>Get medalls and trophies by metting the objectives of each month.</Text>
     <MedallsView/>
   </LayoutTemplateCharts>
    
    
    
    
    
      
   
  );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        padding: 24,
        
      },
      textTitle: {
        display:'flex',
        width: '75%',
        height:'7%',
        marginTop: '9%',
        alignItems: 'flex-start',
        alignContent:'flex-start',
        color:'#51e7fb',
        fontSize: 20,
        
      },
      textDescription:{
        marginTop:'7%',
        marginBottom:'8%',
        textAlign:'justify',
        fontSize:14,
        color:'white',
        width:'75%'
      }
      
}); 

export default LayoutMedalls;