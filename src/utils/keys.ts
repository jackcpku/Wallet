// Import the the ethers shims (**BEFORE** ethers)
import '@ethersproject/shims';

import {ethers} from 'ethers';

export const getKeysFromMnemonics = (mnemonics: string) => {
  const w = ethers.Wallet.fromMnemonic(mnemonics);
  return {privateKey: w.privateKey, address: w.address};
};
