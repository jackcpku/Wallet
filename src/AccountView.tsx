import React from 'react';
import {ScrollView, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {ReduxState} from './types/redux';
import {useEthBalance} from './utils/hooks';

const AccountView = () => {
  const address = useSelector((state: ReduxState) => state.seedphrase.address);
  const ethBalance = useEthBalance(address);

  return (
    <ScrollView>
      <Text>{`The current account is ${address}`}</Text>
      <Text>{`ETH balance: ${ethBalance.toString()}`}</Text>
    </ScrollView>
  );
};

export default AccountView;
