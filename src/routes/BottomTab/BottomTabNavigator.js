import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "../../screens/Home/Home";
import  MainFlowStackNavigator  from "../Stack/MainFlowStackNavigator";
import Setting from "../../screens/Setting/Setting"
import Chat from "../../screens/Chat/Chat"
import Profile from "../../screens/Profile/Profile"
import Icon from 'react-native-vector-icons/Ionicons';
import TopTabNavigator from "../TopTab/TopTabNavigator";

//DELETE AFTER TESTING START
import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TabViewer from "../TopTab/TabViewer";

//DELETE AFTER TESTING END
// import TabView from "../TopTab/TabView";

//const BottomTab = createMaterialBottomTabNavigator();
const BottomTab = createBottomTabNavigator();

//DELETE AFTER TESTING START

// const FirstRoute = () => (
//   <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
// );

// const SecondRoute = () => (
//   <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
// );

// const renderScene = SceneMap({
//   first: FirstRoute,
//   second: SecondRoute,
//   three: Chat
// });

 
//  function TabViewExample() {
//   const layout = useWindowDimensions();

//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     { key: 'first', title: 'First' },
//     { key: 'second', title: 'Second' },
//     {key:'three', title: "Chat"}
//   ]);

//   return (
  
      
//     <TabView
//       navigationState={{ index, routes }}
//       renderScene={renderScene}
//       onIndexChange={setIndex}
//       initialLayout={{ width: layout.width }}
//     />
//   );
// }


//DELETE AFTER TESING END

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
          {/* <BottomTab.Screen name="TabView1" component={TabViewer}
          options={{ tabBarIcon: () => (<Icon name="chatbox-ellipses" size={26} color="gold" />) }}
        />
    
         <BottomTab.Screen name="TabView2" component={TabViewer} 
          options={{ tabBarIcon: () => (<Icon name="chatbox-ellipses" size={26} color="gold" />) }}
        /> */}
    
      </BottomTab.Navigator>
    );
  }


  export default BottomTabNavigator







