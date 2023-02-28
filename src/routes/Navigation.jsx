import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LayoutWellcome from "../layouts/wellcome/LayoutWellcome";
import LayoutLogin from "../layouts/login/LayoutLogin";
import GraphLastMonths from "../layouts/graphsLastMonths/GraphLastMonths";
import LayoutTipsRobot from './../layouts/tipsRobot/LayoutTipsRobot';
import LayoutMedalls from './../layouts/medalls/LayoutMedalls';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LayoutLogin}
          options={{ headerShown: false }}
        /> 
        {/* <Stack.Screen name="Register" component={Register} /> */}
        <Stack.Screen name="LayoutWellcome" component={LayoutWellcome} options={{ headerShown: false }} />
        <Stack.Screen name="LayoutLogin" component={LayoutLogin} options={{ headerShown: false }} /> 
        <Stack.Screen name="GraphMonths" component={GraphLastMonths} options={{ headerShown: false }}/>
        <Stack.Screen name="IATips" component={LayoutTipsRobot} options={{ headerShown: false }}/>
        <Stack.Screen name="Medalls" component={LayoutMedalls}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;