import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/Home/Home";
import About from "../../screens/About/About"
import { screenOptionStyle } from "../screenOptionStyle";
import  MainFlowStackNavigator  from "./MainFlowStackNavigator";

const Stack = createStackNavigator();

 const MainStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="MainHome" component={Home} />
        <Stack.Screen name="Main" component={MainFlowStackNavigator} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    );
  };


  export default MainStackNavigator;
  