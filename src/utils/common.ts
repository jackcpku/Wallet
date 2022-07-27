// Pull in the shims (BEFORE importing ethers)
import '@ethersproject/shims';

// Import the ethers library
import {ethers} from 'ethers';

export const provider = new ethers.providers.JsonRpcProvider(
  'https://ropsten.infura.io/v3/7716453543484960b4d20577b60d6708',
  'ropsten',
);
