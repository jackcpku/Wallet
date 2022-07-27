import {provider} from './common';
import {useEffect, useState} from 'react';
import {BigNumber} from 'ethers';

export const useEthBalance = (address: string) => {
  const [balance, setBalance] = useState(BigNumber.from('0'));

  useEffect(() => {
    const q = async () => {
      const b = await provider.getBalance(address);
      setBalance(b);
    };
    q();
  }, [address]);

  return balance;
};
