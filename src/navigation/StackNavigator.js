import {createAppContainer,createStackNavigator} from 'react-navigation';
import LoginScreen from '../screen/LoginScreen';
import MainScreen from '../screen/MainScreen';
import ForgotPassScreen from '../screen/ForgotPassScreen';
import ChangePassScreen from '../screen/ChangePassScreen'

const RootStack = createStackNavigator(
    {
      Home: {
        screen: LoginScreen,
      },
      Main: {
        screen: MainScreen,
      },
      Forgot:{
        screen: ForgotPassScreen
      },
      Change:{
        screen: ChangePassScreen
      }
    },
    {
      initialRouteName: 'Home',
    }
  );
  
  const AppContainer = createAppContainer(RootStack);
export default AppContainer;