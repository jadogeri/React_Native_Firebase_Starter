import * as React from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./src/config/firebase";
import Navigation from "./src/routes/Navigation";
import { useFonts } from "expo-font";
import { 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper'
import Contact from "./src/screens/Contact/Contact";
import Profile from "./src/screens/Profile/Profile";
import Chat from "./src/screens/Chat/Chat";
import ScrollableTabView from "@sconnelley/react-native-top-tab-view";




export default function App() {
  console.log(firebaseConfig)
  initializeApp(firebaseConfig);

  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

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


  const [fontsLoaded, error] = useFonts({
    "Urbanist-Light": require("./assets/fonts/Urbanist-Light.ttf"),
    "Urbanist-Regular": require("./assets/fonts/Urbanist-Regular.ttf"),
    "Urbanist-Medium": require("./assets/fonts/Urbanist-Medium.ttf"),
    "Urbanist-SemiBold": require("./assets/fonts/Urbanist-SemiBold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Rajdhani-Regular": require("./assets/fonts/Rajdhani-Regular.ttf"),
    "Rajdhani-SemiBold": require("./assets/fonts/Rajdhani-SemiBold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
    <ScrollableTabView>
      <Chat/>
      <Profile/>
      <Contact/>

    </ScrollableTabView>
    </>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});






  // auth.onAuthStateChanged(user =>{
  //   console.log("**************************************this is the current user*******************",user)
  //   if(user){
  //     alert("user logged in")
  //   }else{
  //     alert("user logged out")
  //   }
  // })
  


 //         #TODO
/**
 * 
 * 
 * Based on your comments you should do something like below

const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const BottomNavigator = () => {
return (
  <Tab.Navigator >
    <Tab.Screen name="Post Room" component={PostANewRoomScreen} />
    <Tab.Screen name="Rooms" component={HomeScreen} />
  </Tab.Navigator>
 );
}

export const App = ()  => {
return (
<NavigationContainer>
  <TopTab.Navigator>
      <TopTab.Screen name="Bottom" component={BottomNavigator} />
  </TopTab.Navigator>
</NavigationContainer>
 );
}

export default App;
By this the BottomNavigator which holds the bottom tabs would be nested inside the other one. and also stick to one navigation container.
 */







/**
 * import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}
 */