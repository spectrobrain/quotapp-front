
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text
  
} from "react-native";
import SliderHorizontal from './yearCharts/components/SliderHorizontal'




import { useFonts } from "expo-font";


const LayoutChartLastMonths = () => {

  
  //const [salesUser,setSalesUser] = useState(quotes)
 
  const [fontsLoaded] = useFonts({
    Roboto: require("../../assets/fonts/Roboto-Light.ttf"),
  });

//   if (!fontsLoaded) {
//     return null;
//   }
 
 
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
          <View style={styles.chartViewText}>
          <Text style={styles.textTitle}>Monthly Quote</Text>
          <Text style={styles.textInfo}>You have met an average of 90% of the objective
                sales quota, visit our AI chat to receive advice on 
                how to incresase yor results
          </Text>
          </View>
          <View style={styles.chartViewGraph}>
            <View style={styles.sliderView}>
              <SliderHorizontal style={styles.sliderProgress}/>
            </View>

          </View>
        </View>
        
        
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
    height:'90%',
    marginTop:15,
    justifyContent: "center",
   
  },
  chartViewText:{
    flex:3,
    flexDirection :'column',
    width: "90%",
    height: "90%",
    borderRadius:10,
    marginTop:15,
    marginLeft:20,
    
  },
  chartViewGraph:{
    flex:3,
    flexDirection :'column',
    width: "90%",
    height: "0%",
    borderRadius:10,
    marginTop:15,
    marginLeft:20,
    backgroundColor : '#fff',
  },
  sliderView: {
    justifyContent: "flex-end",
    flexDirection: "column",
    width: "50%",
    height: "12%",
    borderRadius: 20,
    backgroundColor: "yellow",
  },
  
  imageLogo : {
    marginTop:0,
    marginLeft:10,
    width: "30%", 
    height: 50
  },
  textTitle: {
    
    textAlign: "left",
    fontSize:16,
    color:'#0185f2'
  },
  textInfo: {
    
    textAlign: "left",
    fontSize:12,
    color: '#fff'
  },
  
});

export default LayoutChartLastMonths;
