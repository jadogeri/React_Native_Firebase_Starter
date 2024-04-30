const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import GetStarted from "../screens/GetStarted/GetStarted";
import Register from "../screens/Register/Register";
import Login from "../screens/Login/Login";
import Dashboard from "../screens/Dashboard/Dashboard"
import ChangePassword from "../screens/LoginChangePassword/LoginChangePassword";
import ForgotPassword from "../screens/LoginForgotPassword/LoginForgotPassword";

import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Navigation = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

 return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          
          <Stack.Navigator screenOptions={{ headerShown: false }}>
  
            <Stack.Screen            
              name="GetStarted"
              component={GetStarted}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />               
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{ headerShown: false }}
            />
           <Stack.Screen
              name="ChangePassword"
              component={ChangePassword}
              options={{ headerShown: false }}
            /> 
            <Stack.Screen
              
              name="ForgotPassword"
              component={ForgotPassword}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default Navigation;

