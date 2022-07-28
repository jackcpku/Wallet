import React, {useState} from 'react';
import {Button, ScrollView, StyleSheet, Text, TextInput} from 'react-native';
import {useSelector} from 'react-redux';
import {ReduxState} from './types/redux';
import {useEthBalance} from './utils/hooks';

export default () => {
  const address = useSelector((state: ReduxState) => state.seedphrase.address);
  const ethBalance = useEthBalance(address);

  const [receiver, setReceiver] = useState('');

  const onChangeReceiver = (text: string) => {
    setReceiver(text);
  };

  const goNext = () => {
    // TODO
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

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
