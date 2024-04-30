
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MainStackNavigator } from "../Stack/MainStackNavigator";
import { ContactStackNavigator } from "../Stack/ContactStackNavigator";
import { MainStackNavigator } from "../Stack/MainStackNavigator";
import { ContactStackNavigator } from "../Stack/ContactStackNavigator";

const TopTab = createMaterialTopTabNavigator();

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
  