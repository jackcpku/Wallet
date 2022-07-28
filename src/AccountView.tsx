import React from 'react';
import {Button, ScrollView, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {AccountStackSendViewProps} from './types/navigation';
import {ReduxState} from './types/redux';
import {useEthBalance} from './utils/hooks';

export default ({navigation}: AccountStackSendViewProps) => {
  const address = useSelector((state: ReduxState) => state.seedphrase.address);
  const ethBalance = useEthBalance(address);

  const gotoSendFlow = () => {
    navigation.push('SendView');
  };
  return (
    <ScrollView>
      <Text>{`The current account is ${address}`}</Text>
      <Text>{`ETH balance: ${ethBalance.toString()}`}</Text>
      <Button
        onPress={gotoSendFlow}
        title="Send"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </ScrollView>
  );
};
