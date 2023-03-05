import * as React from 'react';
import { StyleSheet, Text ,Dimensions} from 'react-native';

import LayoutTemplateCharts from '../LayoutTemplateCharts';
import ChartViewMonth from './components/ChartViewMonth';
const { width, height } = Dimensions.get("window");

const LayoutGraphLastMonths= () => {
  const {
    textTitle,
    
  } = styles

  return (

    <LayoutTemplateCharts>
      <Text style={textTitle}>Monthly Quote</Text>
      <Text style={styles.textDescription}>You have met an average of 90% of the objetive
         sales quota, visit AI chat to receive advice on how to increase your results</Text>
      <ChartViewMonth/>
        
      
    </LayoutTemplateCharts>
    
    
    
    
      
   
  );
}

const styles = StyleSheet.create({
   
  container: {
    justifyContent: "center",
    width: width,
    height: "100%",
  },

  containerHeader: {
    width: "100%",
    height: "11%",
  },
  textTitle: {
    display:'flex',
    width: '90%',
    height:'7%',
    marginTop: '9%',
    alignItems: 'flex-start',
    alignContent:'flex-start',
    color:'#51e7fb',
    fontSize: 20,
    
  },
  textDescription:{
    marginTop:'5%',
    marginBottom:'8%',
    fontSize:14,
    color:'white',
    width:'90%'
  }
}); 

export default LayoutGraphLastMonths;