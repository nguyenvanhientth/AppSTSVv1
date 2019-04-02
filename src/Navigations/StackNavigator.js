import { createStackNavigator, createAppContainer } from "react-navigation";

import MyApp from '../Navigations/DrawerNavigator';
import LoginStackNavigator from './LoginStackNavigator'

const RootStack = createStackNavigator(
  {
    Login : {screen: LoginStackNavigator,navigationOptions: {header: null} },
    Main : {screen: MyApp,navigationOptions: {header: null} }
  },
  {
    initialRouteName: 'Login'  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;