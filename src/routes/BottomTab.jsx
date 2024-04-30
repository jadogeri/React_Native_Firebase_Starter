import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home/Home"
import Icon from "react-native-vector-icons/Ionicons";


const Tab = createBottomTabNavigator();

const screenOptionStyle = {
    headerStyle: {
      backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
  };

export const BottomTabNavigator = () => {
    return (
      <Tab.Navigator initialRouteName='Search' screenOptions={{
        tabBarInactiveTintColor: 'gold',
        tabBarActiveBackgroundColor: 'brown',
        activeColor: "pink",
        inactiveColor: "black",
        barStyle: { backgroundColor: 'purple' },
      }} activeColor='gold' >
         <Tab.Screen name="Home" component={Home}
          options={{ tabBarIcon: () => (<Icon name="ios-home" size={26} color="gold" />) }}
        />
        {/* <Tab.Screen name="Search" component={MainFlowStackNavigator}
          options={{ tabBarIcon: () => (<Icon name="ios-search" size={26} color="gold" />) }}
        /> */}
  
   <Tab.Screen name="Home2" component={Home}
          options={{ tabBarIcon: () => (<Icon name="ios-home" size={26} color="gold" />) }}
        />
        {/*}
        <Tab.Screen name="Search" component={MainFlowStackNavigator}
          options={{ tabBarIcon: () => (<Icon name="ios-search" size={26} color="gold" />) }}
        />
  
        <Tab.Screen name="Setting" component={Setting}
          options={{ tabBarIcon: () => (<Icon name="ios-settings" size={26} color="gold" />) }}
        />
        <Tab.Screen name="Chat" component={Chat}
          options={{ tabBarIcon: () => (<Icon name="ios-chatbox-ellipses" size={26} color="gold" />) }}
        />
        <Tab.Screen name="Profile" component={Profile}
          options={{ tabBarIcon: () => (<Icon name="ios-chatbox-ellipses" size={26} color="gold" />) }}
        /> */}
      </Tab.Navigator>
    );
  }

