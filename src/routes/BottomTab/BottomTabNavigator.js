import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Home from "../../screens/Home/Home";
import  MainFlowStackNavigator  from "../Stack/MainFlowStackNavigator";
import Setting from "../../screens/Setting/Setting"
import Chat from "../../screens/Chat/Chat"
import Profile from "../../screens/Profile/Profile"
import Icon from 'react-native-vector-icons/Ionicons';
import TopTabNavigator from "../TopTab/TopTabNavigator";

//const BottomTab = createMaterialBottomTabNavigator();
const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {

    return (
      
      <BottomTab.Navigator initialRouteName='Home' 
      
      screenOptions={{
        tabBarInactiveTintColor: 'gold',
        tabBarActiveBackgroundColor: 'brown',
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
          options={{ tabBarIcon: () => (<Icon name="home" size={26} color="gold" />) }}
        />
        <BottomTab.Screen name="Search" component={MainFlowStackNavigator}
          options={{ tabBarIcon: () => (<Icon name="search" size={26} color="gold" />) }}
        />
  
        <BottomTab.Screen name="Setting" component={Setting}
          options={{ tabBarIcon: () => (<Icon name="settings" size={26} color="gold" />) }}
        />
        <BottomTab.Screen name="Chat" component={Chat}
          options={{ tabBarIcon: () => (<Icon name="chatbox-ellipses" size={26} color="gold" />) }}
        />
        <BottomTab.Screen name="Profile" component={Profile}
          options={{ tabBarIcon: () => (<Icon name="chatbox-ellipses" size={26} color="gold" />) }}
        />
         <BottomTab.Screen name="uuuuuuuuuuuuuu" component={TopTabNavigator}
          options={{ tabBarIcon: () => (<Icon name="chatbox-ellipses" size={26} color="gold" />) }}
        />
    
      </BottomTab.Navigator>
    );
  }


  export default BottomTabNavigator