import { createStackNavigator, createAppContainer } from "react-navigation";

import LoginScreen from '../Screens/LoginScreen';
import ForgotPassScreen from '../Screens/ForgotPassScreen';

const LoginStack = createStackNavigator({
    Login: {screen: LoginScreen,navigationOptions: {header: null} },
    Forgot: {screen: ForgotPassScreen,navigationOptions: {header: null} }
},
{
    initialRouteName: 'Login',
}
);

const LoginStackNavigator = createAppContainer(LoginStack);

export default LoginStackNavigator;