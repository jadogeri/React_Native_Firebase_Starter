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
  
const ContactStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>

        <Stack.Screen name="Contact" component={Contact} />
        </Stack.Navigator>
    );
};

const MainStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="MainHome" component={Home} />
        {/* <Stack.Screen name="Main" component={MainFlowStackNavigator} /> */}
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    );
};
  
export const TopTabNavigator = () => {
    return (
      <TopTab.Navigator container={TopTab} initialRouteName="MainTop" >
        <TopTab.Screen name="MainTop" component={MainStackNavigator}  
        />
        <TopTab.Screen name="ContactTop" component={ContactStackNavigator}
        />
      </TopTab.Navigator>
    );
}

  
