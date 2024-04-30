import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Contact from "../screens/Contact/Contact"
import About from "../screens/About/About"

const TopTab = createMaterialTopTabNavigator();

const screenOptionStyle = {
    headerStyle: {
      backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
  };

  const MainFlowStackNavigator = () => {
    return (
      <Stack.Navigator initialRouteName='Search' screenOptions={screenOptionStyle}>
        <Stack.Screen name="Search" component={<><h1>Search</h1></>}  />
        <Stack.Screen name="ResultsShow" component={<><h1>ResultShow</h1></>} />
        <Stack.Screen name="WebResultsShow" component={<><h1>WebResultsShow</h1></>} />
        <Stack.Screen name="MapView" component={<><h1>MapViewScreen</h1></>} />  
      </Stack.Navigator>
    );
  };
  

const MainStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="MainHome" component={<><h1>main Home</h1></>} />
        <Stack.Screen name="Main" component={MainFlowStackNavigator} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    );
};
  
export const TopTabNavigator = () => {
    return (
      <TopTab.Navigator container={TopTab} initialRouteName="MainTop" >
        <TopTab.Screen name="MainTop" component={MainStackNavigator}  
        />
        <TopTab.Screen name="ContactTop" component={<><h1>ContactStackNavigator</h1></>}
        />
      </TopTab.Navigator>
    );
}

  
