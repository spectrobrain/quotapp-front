
import { useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  
} from "react-native";
import ChartView from './yearCharts/components/ChartView';
import NavBottonChart from './yearCharts/components/NavBottonChart'
import YearChartView from './yearCharts/components/YearChartView';
import { quotes } from "../services/Data.json";




import { useFonts } from "expo-font";


const LayoutYearChart = ({ navigation }) => {

  
  const [salesUser,setSalesUser] = useState(quotes)
 
  const [fontsLoaded] = useFonts({
    Roboto: require("../../assets/fonts/Roboto-Light.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
 
 
  return (
    <ImageBackground
      style={{ width: "100%", height: 690 }}
      source={require("../../assets/images/app_bg.jpg")}
    >
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Image
          style={styles.imageLogo}
            source={require("../../assets/images/logo_w.png")}
            
          ></Image>
        </View>
        { salesUser ? salesUser?.map((sale)=><ChartView key={sale.id} salesInfo={sale}/>): null }
        
        <YearChartView />
        <NavBottonChart  navigation={navigation}/>
        
      </View>
      

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  wrapper: {
    width: "100%",
    height:40,
    marginTop:15,
    justifyContent: "flex-start",
   
  },
  chartView:{
    flexDirection :'column',
    width: "90%",
    height: "15%",
    borderRadius:10,
    marginTop:15,
    backgroundColor : '#fff',
  },
  imageLogo : {
    marginTop:0,
    marginLeft:10,
    width: "30%", 
    height: 50
  }
  
});

export default LayoutYearChart;
