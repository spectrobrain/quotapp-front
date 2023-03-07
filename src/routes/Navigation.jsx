import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LayoutWellcome from "../layouts/wellcome/LayoutWellcome";
import LayoutLogin from "../layouts/login/LayoutLogin";
import LayoutGraphLastMonths from "../layouts/graphsLastMonths/LayoutGraphLastMonths";
import LayoutTipsRobot from './../layouts/tipsRobot/LayoutTipsRobot';
import  LayoutCharts from '../layouts/chartsData/LayoutCharts';
import LayoutMedalls from './../layouts/medalls/LayoutMedalls';
import LayoutBarTop from './../layouts/LayoutBarTop';

const Stack = createNativeStackNavigator();
//initialRouteName="Login"
const Navigation = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="Login"
          component={LayoutLogin}
          options={{ headerShown: false }}
        /> 
        {/* <Stack.Screen name="Register" component={Register} /> */}
        <Stack.Screen name="LayoutWellcome" component={LayoutWellcome} options={{ headerShown: false }} />
        <Stack.Screen name="LayoutLogin" component={LayoutLogin} options={{ headerShown: false }} /> 
        <Stack.Screen name="GraphMonths" component={LayoutGraphLastMonths} options={{ headerShown: false }}/>
        <Stack.Screen name="IATips" component={LayoutTipsRobot} options={{ headerShown: false }}/>
        <Stack.Screen name="Medalls" component={LayoutMedalls } options={{ headerShown: false }}/>
        <Stack.Screen name="LayoutCharts" component={LayoutCharts} options={{ headerShown: false }}/>
        <Stack.Screen name="IconBack" component={LayoutCharts} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;