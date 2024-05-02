import * as React from "react";

import { RootStackNavigator } from "./Stack/RootStackNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DrawerNavigator } from "./Drawer/DrawerNavigator"
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";




import { BottomTabNavigator } from "./BottomTab/BottomTabNavigator";

const BottomTab = createBottomTabNavigator();
const Navigation = () => {
    const auth = AsyncStorage.getItem("user");

  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

 return (
    <>
      {/* <NavigationContainer>
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
      </NavigationContainer> */}
      <NavigationContainer>
      {/* <BottomTab.Navigator  > */}
         {/* <BottomTab.Screen name="vvv" component={DrawerNavigator} /> */}
        

        {
          // auth?<BottomTabNavigator/> : <RootStackNavigator/>
          auth?<DrawerNavigator/> : <RootStackNavigator/>

        }

        {/* </BottomTab.Navigator> */}
      </NavigationContainer>
    </>
  );
};
export default Navigation;




/**
 * import React, { useState, useReducer, useMemo, useContext,useEffect } from "react";
import { StyleSheet, View, Text, Button, ActivityIndicator } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from './src/screens/Home/HomeScreen'
import About from './src/screens/About/AboutScreen'
import Contact from './src/screens/Contact/ContactScreen'
import ResultsShow from './src/screens/ResultsShow/ResultsShowScreen'
import WebResultsShow from './src/screens/WebResultsShow/WebResultsShowScreen'
import Search from './src/screens/Search/SearchScreen'
import Chat from "./src/screens/Chat/ChatScreen";
import Setting from "./src/screens/Setting/SettingScreen"
import Icon from "react-native-vector-icons/Ionicons";
import Profile from './src/screens/Profile/ProfileScreen'
import MapViewScreen from "./src/screens/MapView/MapViewScreen";
import { DrawerContent } from "./src/screens/DrawerContent/DrawerContentScreen";
import SplashScreen from "./src/screens/Splash/SplashScreen"
import SignInScreen from "./src/screens/SignIn/SignInScreen";
import SignUpScreen from "./src/screens/SignUp/SignUpScreen"
import { Provider as AuthProvider, Context as AuthContext } from './src/context/AuthContext'
import { 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper'
import axios from 'axios'
// import Test from './test'
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Root = createStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();


const RootStackNavigator = () => {
  return (
    <Root.Navigator screenOptions={screenOptionStyle} headerMode='none'>
      <Root.Screen name="splash" component={SplashScreen} />
      <Root.Screen name="signup" component={SignUpScreen} />
      <Root.Screen name="signin" component={SignInScreen} />

    </Root.Navigator>
  );
};

const TopTabNavigator = () => {
  return (
    <TopTab.Navigator container={TopTab} initialRouteName="MainTop" >
      <TopTab.Screen name="MainTop" component={MainStackNavigator}

      />
      <TopTab.Screen name="ContactTop" component={ContactStackNavigator}
      />
    </TopTab.Navigator>
  );
}





const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="MainHome" component={Home} />
      <Stack.Screen name="Main" component={MainFlowStackNavigator} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

const MainFlowStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Search' screenOptions={screenOptionStyle}>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="ResultsShow" component={ResultsShow} />
      <Stack.Screen name="WebResultsShow" component={WebResultsShow} />
      <Stack.Screen name="MapView" component={MapViewScreen} />

    </Stack.Navigator>
  );
};

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>

      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
};
const DrawerNavigator = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null); 
  return (

    <Drawer.Navigator drawerContent={props => <DrawerContent{...props} />} component={DrawerContent} screenOptions={{
      headerStyle: {
        backgroundColor: '#009387'
      },
      headerTintColor: '#fff',
      headerTitle: {
        fontWeight: 'bold',
      }
    }}>
      <Drawer.Screen name="BottomTabNav" component={BottomTabNavigator} />
      <Drawer.Screen name="Home1" component={TopTabNavigator} />
      <Drawer.Screen name="ContactDrawer" component={ContactStackNavigator} options={{ title: 'Contact' }} />

    </Drawer.Navigator>
  );
};

const App = () => {
  const {state, tryLocalSignin} = useContext(AuthContext)

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
      ...NavigationDefaultTheme,
      ...PaperDefaultTheme,
      background: '#ffffff',
      text: '#333333'
    
  }
  
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    ...NavigationDarkTheme,
      ...PaperDarkTheme,
      background: '#333333',
      text: '#ffffff'
    
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  // //setNavigator(props.navigation)

  useEffect(() => {
  
      tryLocalSignin();
    
    //NavigationEvents
     
  }, [])

  if( state.isLoading ) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }
  
  return (
<PaperProvider theme={theme}>
    <NavigationContainer  >
      {!state.isLoggedIn ?      

       <DrawerNavigator/>
      :
      <RootStackNavigator />

      }

    </NavigationContainer>
    </PaperProvider>
  )

}


const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});
*/

// export default () => {
//   return <AuthProvider>
//     <App />
//   </AuthProvider>
// };
 