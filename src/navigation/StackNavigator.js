import {createAppContainer,createStackNavigator} from 'react-navigation';
import LoginScreen from '../screen/LoginScreen';
import ForgotPassScreen from '../screen/ForgotPassScreen';
import MainApp from './DrawerNavigator';
import SplashScreen from '../screen/SplashScreen';

const LoginStack = createStackNavigator(
  {
    Login: LoginScreen,
    Forgot: ForgotPassScreen
  }
)
const SplashStack = createStackNavigator(
  {
    SplashScreen:{
      screen: SplashScreen,
      navigationOptions: {
        header: null,
      },
    }
},{
  navigationOptions: {
    header: null,
  },
  headerMode: null,
})
const RootStack = createStackNavigator(
    {
      Login: {
        screen: LoginStack,
        navigationOptions: {
          header: null,
        },
      },
      Main: {
        screen: MainApp,
      },
      Splash: SplashStack,
    },
    {
      initialRouteName: 'Splash',
      headerMode: null
    }
  );
  
  const AppContainer = createAppContainer(RootStack);
export default AppContainer;