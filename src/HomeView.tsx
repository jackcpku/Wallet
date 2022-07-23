import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AccountView from './AccountView';
import SettingsView from './SettingsView';

const Tab = createBottomTabNavigator();

const HomeView = () => {
  return (
    // <NavigationContainer>
    <Tab.Navigator initialRouteName="Account">
      <Tab.Screen name="Account" component={AccountView} />
      <Tab.Screen name="Settings" component={SettingsView} />
    </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default HomeView;
