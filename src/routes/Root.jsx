import { createStackNavigator } from "@react-navigation/stack";
import GetStarted from "../screens/GetStarted/GetStarted";
import Register from "../screens/Register/Register";
import Login from "../screens/Login/Login";

const screenOptionStyle = {
    headerStyle: {
      backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
  };

const Root = createStackNavigator();

export const RootStackNavigator = () => {
    return (
      <Root.Navigator screenOptions={screenOptionStyle} headerMode='none'>
        <Root.Screen            
            name="GetStarted"
            component={GetStarted}
            options={{ headerShown: false }}
        />
        <Root.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
        />
        <Root.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
        />               
        <Root.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ headerShown: false }}
        />
        <Root.Screen
            name="ChangePassword"
            component={ChangePassword}
            options={{ headerShown: false }}
        /> 
        <Root.Screen            
            name="ForgotPassword"
            component={ForgotPassword}
            options={{ headerShown: false }}
        />  
      </Root.Navigator>
    );
};

