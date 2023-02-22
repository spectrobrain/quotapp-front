import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GraphYear from '../layouts/TabBotton/GraphYear';
import LayoutWellcome from "../layouts/wellcome/LayoutWellcome";
import LayoutLogin from "../layouts/login/LayoutLogin";
import LayoutYearChart from '../layouts/LayoutYearChart';
import LayoutChartLastMonths from '../layouts/LayoutChartLastMonths';
import LayoutTipsRobot from './../layouts/LayoutTipsRobot';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LayoutLogin}
          options={{ headerShown: false, title: 'MTQ' }}
        /> 
        {/* <Stack.Screen name="Register" component={Register} /> */}
        <Stack.Screen name="LayoutWellcome" component={LayoutWellcome} />
        <Stack.Screen name="LayoutLogin" component={LayoutLogin} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;