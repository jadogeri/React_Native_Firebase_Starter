import { createDrawerNavigator } from "@react-navigation/drawer";
import { TopTabNavigator } from "../TopTab/TopTabNavigator";
import {DrawerContent} from "../../components/DrawerContent/DrawerContent"
import { BottomTabNavigator } from "../BottomTab/BottomTabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    // const [isLoading, setIsLoading] = React.useState(true);
    // const [userToken, setUserToken] = React.useState(null); 
    return (
  
      <Drawer.Navigator drawerContent={props => <DrawerContent{...props} />} component={DrawerContent} screenOptions={{
        headerStyle: {
          backgroundColor: '#009387'
        },
        headerTintColor: '#fff',
        headerTitle: {
          fontWeight: 'bold',
        }
      }}>
        <Drawer.Screen name="BottomTabNav" component={BottomTabNavigator} />
        <Drawer.Screen name="Home1" component={TopTabNavigator} />
        <Drawer.Screen name="ContactDrawer" component={ContactStackNavigator} options={{ title: 'Contact' }} />
  
      </Drawer.Navigator>
    );
  };
  