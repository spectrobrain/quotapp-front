import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LayoutWellcome from "../layouts/wellcome/LayoutWellcome";
import LayoutLogin from "../layouts/login/LayoutLogin";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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