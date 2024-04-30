import { createStackNavigator } from "@react-navigation/stack";
import { screenOptionStyle } from "../screenOptionStyle";
import WebResultsShow from "../../screens/WebResultsShow/WebResultsShow";
import Map from "../../screens/Map/Map"
import Result from "../../screens/Result/Result"
import Search from "../../screens/Search/Search";


const Stack = createStackNavigator();

export const MainFlowStackNavigator = () => {
    return (
      <Stack.Navigator initialRouteName='Search' screenOptions={screenOptionStyle}>
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="ResultsShow" component={Result} />
        <Stack.Screen name="WebResultsShow" component={WebResultsShow} />
        <Stack.Screen name="MapView" component={Map} />
  
      </Stack.Navigator>
    );
  };