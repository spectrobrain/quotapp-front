import React,{useState} from "react";
import {
  StyleSheet,
  Dimensions,
} from "react-native";
import LayoutTemplateCharts from "../LayoutTemplateCharts";
import NavBottonChart from "./NavBottonChart";
import ChartView from "./components/ChartView";
import ChartViewVertical from "./components/ChartViewVertical";
import {quotes,lasttreemonths} from '../../services/Data.json'
const { width, height } = Dimensions.get("window");

const LayoutCharts = ({ navigation }) => {
 
  

  const [salesUser,setSalesUser] = useState(quotes)
  
  //const [salesMonths,setSalesMonths] = useState(lasttreemonths)
  return (
    <LayoutTemplateCharts navigation={navigation}>
      { salesUser ? salesUser?.map((sale)=><ChartView key={sale.id} salesInfo={sale}/>): null }
       <ChartViewVertical  />
     <NavBottonChart navigation={navigation}/> 
    </LayoutTemplateCharts>
  );
};

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

  
  
});

export default LayoutCharts;
