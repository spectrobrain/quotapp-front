import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LayoutTemplateCharts from '../LayoutTemplateCharts';


const LayoutTipsRobot= ({children}) => {
  return (
    <LayoutTemplateCharts>
    
    <Text> Tips Robot</Text>

    </LayoutTemplateCharts>
   
    
    
    
    
      
   
  );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        padding: 24,
        
      },
}); 

export default LayoutTipsRobot;