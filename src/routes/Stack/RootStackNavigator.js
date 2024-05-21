import { createStackNavigator } from "@react-navigation/stack";
import GetStarted from "../../screens/GetStarted/GetStarted";
import Register from "../../screens/Register/Register";
import Login from "../../screens/Login/Login";
import ChangePassword from "../../screens/LoginChangePassword/LoginChangePassword";
import ForgotPassword from "../../screens/LoginForgotPassword/LoginForgotPassword";
import { screenOptionStyle } from "../screenOptionStyle";

const RootStack = createStackNavigator();

export const RootStackNavigator = () => {
    return (
      <RootStack.Navigator screenOptions={screenOptionStyle} headerShown='false'>
        <RootStack.Screen            
            name="GetStarted"
            component={GetStarted}
            options={{ headerShown: false }}
        />
        <RootStack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
        />
        <RootStack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
        /> 
      <RootStack.Screen
            name="ChangePassword"
            component={ChangePassword}
            options={{ headerShown: false }}
        /> 
        <RootStack.Screen            
            name="ForgotPassword"
            component={ForgotPassword}
            options={{ headerShown: false }}
        />  
      </RootStack.Navigator>
    );
};

