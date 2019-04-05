import React from 'react';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import MainScreen from '../Screens/MainScreen';
import ChangePassScreen from '../Screens/ChangePassScreen';
import UpdateScreen from '../Screens/UpdateScreen';
import XinGiayXNScreen from '../Screens/XinGiayXNScreen';
import XinBangDiemScreen from '../Screens/XinBangDiemScreen';
import ThoiKhoaBieuScreen from '../Screens/ThoiKhoaBieuScreen';
import SiderBarComponent from '../Components/SideBarComponent';

const NavigationProfile = (props) => (
  <SiderBarComponent {...props}></SiderBarComponent>
 )

const MyDrawerNavigator = createDrawerNavigator({
    Home: {
      screen: MainScreen,navigationOptions: {header: null} 
    },
    ChangePass: {
      screen: ChangePassScreen,navigationOptions: {header: null} 
    },
    Update: {
      screen: UpdateScreen,navigationOptions: {header: null} 
    },
    XinGiayXN:{
      screen: XinGiayXNScreen,navigationOptions: {header: null} 
    },
    XinBangDiem: {
      screen: XinBangDiemScreen,navigationOptions: {header: null}
    },
    XemTKB: {
      screen: ThoiKhoaBieuScreen,navigationOptions: {header: null}
    },
  },
  {
    initialRouteName: 'Home',
    contentComponent: NavigationProfile // edit drawer stack
  }
);
  
  const MyApp = createAppContainer(MyDrawerNavigator);
  export default MyApp;