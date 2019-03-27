import {createAppContainer,createStackNavigator} from 'react-navigation';
import LoginScreen from '../screen/LoginScreen';
import ForgotPassScreen from '../screen/ForgotPassScreen';
import MainApp from './DrawerNavigator';

const LoginStack = createStackNavigator(
  {
    Login: LoginScreen,
    Forgot: ForgotPassScreen
  }
)
const RootStack = createStackNavigator(
    {
      Login: {
        screen: LoginStack,
      },
      Main: {
        screen: MainApp,
      },
    },
    {
      initialRouteName: 'Login',
      headerMode: null
    }
  );
  
  const AppContainer = createAppContainer(RootStack);
export default AppContainer;