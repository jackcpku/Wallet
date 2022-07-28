import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AccountView from './AccountView';
import SendView from './SendView';

const Stack = createNativeStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator initialRouteName="AccountView">
      <Stack.Screen name="AccountView" component={AccountView} />
      <Stack.Screen name="SendView" component={SendView} />
    </Stack.Navigator>
  );
};

export default AccountStack;
