import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AccountView from './AccountView';
import {SendView1, SendView2} from './SendFlow';

const Stack = createNativeStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator initialRouteName="AccountView">
      <Stack.Screen name="AccountView" component={AccountView} />
      <Stack.Screen name="SendView1" component={SendView1} />
      <Stack.Screen name="SendView2" component={SendView2} />
    </Stack.Navigator>
  );
};

export default AccountStack;
