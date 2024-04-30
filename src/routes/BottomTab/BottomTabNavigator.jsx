import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home/Home";
import { MainFlowStackNavigator } from "../Stack/MainFlowStackNavigator";
import Setting from "../../screens/Setting/Setting"
import Chat from "../../screens/Chat/Chat"
import Profile from "../../screens/Profile/Profile"



const BottomTab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
    return (
      <BottomTab.Navigator initialRouteName='Search' screenOptions={{
        BottomTabBarInactiveTintColor: 'gold',
        BottomTabBarActiveBackgroundColor: 'brown',
        activeColor: "pink",
        inactiveColor: "black",
        barStyle: { backgroundColor: 'purple' },
      }} activeColor='gold' >
        {/* <BottomTab.Screen name="Home" component={Home}
          options={{ BottomTabBarIcon: () => (<Icon name="ios-home" size={26} color="gold" />) }}
        />
        <BottomTab.Screen name="Search" component={MainFlowStackNavigator}
          options={{ BottomTabBarIcon: () => (<Icon name="ios-search" size={26} color="gold" />) }}
        /> */}
  
        <BottomTab.Screen name="Home" component={Home}
          options={{ BottomTabBarIcon: () => (<Icon name="ios-home" size={26} color="gold" />) }}
        />
        <BottomTab.Screen name="Search" component={MainFlowStackNavigator}
          options={{ BottomTabBarIcon: () => (<Icon name="ios-search" size={26} color="gold" />) }}
        />
  
        <BottomTab.Screen name="Setting" component={Setting}
          options={{ BottomTabBarIcon: () => (<Icon name="ios-settings" size={26} color="gold" />) }}
        />
        <BottomTab.Screen name="Chat" component={Chat}
          options={{ BottomTabBarIcon: () => (<Icon name="ios-chatbox-ellipses" size={26} color="gold" />) }}
        />
        <BottomTab.Screen name="Profile" component={Profile}
          options={{ BottomTabBarIcon: () => (<Icon name="ios-chatbox-ellipses" size={26} color="gold" />) }}
        />
      </BottomTab.Navigator>
    );
  }