import { createStackNavigator, createAppContainer , createTabNavigator, createBottomTabNavigator} from "react-navigation";

import MyApp from '../Navigations/DrawerNavigator';
import LoginStackNavigator from './LoginStackNavigator';
import SplashScreen from '../Screens/SplashScreen';
import ProfileScreen from '../Screens/ProfileScreen';

const SplashStack = createStackNavigator(
  {
    splash: {
      screen: SplashScreen,navigationOptions: {header: null} 
    }
})

const stackProfile = createStackNavigator({
  Profile: {
    screen: ProfileScreen, navigationOptions: {header: null}
  }
})

const tabProfile = createBottomTabNavigator(
  {
    Home: {
      screen: MyApp,
    },
    Profile: {
      screen: stackProfile,
    }
  }
)

const RootStack = createStackNavigator(
  {
    Login : {screen: LoginStackNavigator,navigationOptions: {header: null} },
    Main : {screen: tabProfile,navigationOptions: {header: null} },
    Splash: {screen: SplashStack,navigationOptions: {header: null} }
    },
    {
      initialRouteName: 'Splash',
      headerMode: null
    }
  );

const AppContainer = createAppContainer(RootStack);

export default AppContainer;