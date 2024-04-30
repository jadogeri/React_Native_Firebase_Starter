import { createStackNavigator } from "@react-navigation/stack";
import { screenOptionStyle } from "../screenOptionStyle";

import Contact from "../../screens/Contact/Contact"

const Stack = createStackNavigator();


export const ContactStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
  
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    );
  };