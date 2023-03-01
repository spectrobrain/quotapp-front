import React,{useState} from "react";
import { View, StyleSheet, Text } from "react-native";
import ViewSliderVertical from "./ViewSliderVertical";
import { useFonts } from "expo-font";
// import { useDataSeller } from "../../../hooks/useDataSeller";
 import { lasttreemonths } from "../../../services/Data.json";

const YearChartView = (salesMonths) => {
 console.log('last',lasttreemonths)
    const [dataSales,setDataSales] = useState(lasttreemonths)
    console.log(dataSales)
    console.log(salesMonths)
  const {
    chartView,
    chartSlideMonths,
    viewTextPast,
    textAcomplishment,
    textPastMonth,
  } = styles;

 
  const [fontsLoaded] = useFonts({
    Roboto: require("../../../../assets/fonts/Roboto-Light.ttf"),
  });

  //   return null;
  // }
//const {month}= lasttreemonths
const months = lasttreemonths?.map((month) => month.month)
const quote = lasttreemonths?.map((month) => month.quote)

  return (
    <View style={[chartView]}>
      <View style={viewTextPast}>
        <Text style={textPastMonth}>Past month Sales</Text>
        <Text style={textAcomplishment}>80.6% Average Acomplishment</Text>
      </View>
      <View style={chartSlideMonths}>
      { dataSales ? lasttreemonths?.map((months,index)=><ViewSliderVertical key={`${months?.quote}-${index}`} month={months.month} quote={months.quote} />): null }
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  chartView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    alignContent: "flex-end",
    width: "90%",
    height: "25%",
    borderRadius: 20,
    marginTop: 12,
    backgroundColor: "#fff",
  },
  viewTextPast: {
    justifyContent: "center",
    alignItems: "flex-start",
    width: "45%",
    height: "100%",
  },
  chartSlideMonths: {
    flexDirection: "row",
    width: "55%",
    height: "100%",
  },
  chartSlider: {
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
    height: "100%",
    marginLeft: 5,
  },
  textMonthChart: {
    fontSize: 12,
  },
  textPastMonth: {
    fontSize: 16,
    width: "50%",
    height: "50%",
    marginLeft: 15,
  },
  textAcomplishment: {
    fontSize: 12,
    color: "#0185f2",
    marginTop: 5,
    marginLeft: 15,
  },
});

export default YearChartView;
