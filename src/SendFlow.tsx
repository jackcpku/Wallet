import React, {useState} from 'react';
import {Button, ScrollView, StyleSheet, Text, TextInput} from 'react-native';
import {useSelector} from 'react-redux';
import {AccountStackSendView2Props} from './types/navigation';
import {ReduxState} from './types/redux';
import {useEthBalance} from './utils/hooks';

export const SendView1 = ({navigation}: AccountStackSendView2Props) => {
  const address = useSelector((state: ReduxState) => state.seedphrase.address);
  const ethBalance = useEthBalance(address);

  const [receiver, setReceiver] = useState('');

  const onChangeReceiver = (text: string) => {
    setReceiver(text);
  };

  const goNext = () => {
    navigation.navigate('SendView2', {receiver});
  };

  return (
    <ScrollView>
      <Text>{`From ${address}`}</Text>
      <Text>{`ETH balance: ${ethBalance.toString()}`}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeReceiver}
        value={receiver}
        placeholder="Public address (0x) or ENS"
        // keyboardType="numeric"
      />
      <Button
        onPress={goNext}
        title="Next step"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </ScrollView>
  );
};

/**
 * The amount of tokens to be transferred is determined on this page.
 */
export const SendView2 = ({route}: any) => {
  const [amount, setAmount] = useState('');
  const onChangeAmount = (text: string) => {
    setAmount(text);
  };

  const sendTransaction = () => {
    // TODO
  };

  return (
    <ScrollView>
      <Text>{`Transferring ETH to ${route.params.receiver}`}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeAmount}
        value={amount}
        placeholder="0"
        keyboardType="numeric"
      />
      <Button
        onPress={sendTransaction}
        title="Send transaction"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
