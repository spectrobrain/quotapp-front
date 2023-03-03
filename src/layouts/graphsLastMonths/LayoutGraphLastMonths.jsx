import * as React from 'react';
import { StyleSheet, Text } from 'react-native';

import LayoutTemplateCharts from '../LayoutTemplateCharts';
import ChartView from './components/ChartView';

const LayoutGraphLastMonths= () => {
  return (
    <LayoutTemplateCharts>
      <ChartView>
        <Text> Graphs Last Months</Text>
      </ChartView>
    </LayoutTemplateCharts>
    
    
    
    
      
   
  );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        padding: 24,
        
      },
}); 

export default LayoutGraphLastMonths;