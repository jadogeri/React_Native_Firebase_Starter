import { createStackNavigator } from "@react-navigation/stack";
import { screenOptionStyle } from "../screenOptionStyle";

import Contact from "../../screens/Contact/Contact"
import BottomTabNavigator from "../BottomTab/BottomTabNavigator";

const Stack = createStackNavigator();


const ContactStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>

        {/*Added TT for testing*/}
        <Stack.Screen name="TTT" component={BottomTabNavigator} />
  
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    );
  };

export default ContactStackNavigator;