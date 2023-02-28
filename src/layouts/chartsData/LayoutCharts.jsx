import React,{useState} from "react";
import {
  StyleSheet,
  Dimensions,
} from "react-native";
import LayoutTemplateCharts from "../LayoutYearCharts";
import NavBottonChart from "./NavBottonChart";
import ChartView from "./components/ChartView";
import ChartViewVertical from "./components/ChartViewVertical";
import {quotes} from '../../services/Data.json'
const { width, height } = Dimensions.get("window");

const LayoutCharts = ({ navigation }) => {
  let Height = Dimensions.get("window").height;
  let Width = Dimensions.get("window").width;
  console.log(Height, Width);

  const [salesUser,setSalesUser] = useState(quotes)
  return (
    <LayoutTemplateCharts>
      { salesUser ? salesUser?.map((sale)=><ChartView key={sale.id} salesInfo={sale}/>): null }
       <ChartViewVertical />
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
