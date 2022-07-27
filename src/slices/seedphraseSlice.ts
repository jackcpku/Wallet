import {getKeysFromMnemonics} from './../utils/keys';
import {GENERATE_SEEDPHRASE} from './../const';
import {Action} from '../types/redux';

const initialState = {
  generated: false,
  mnemonic: '',
  privateKey: '',
  address: '',
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case GENERATE_SEEDPHRASE: {
      const {privateKey, address} = getKeysFromMnemonics(action.payload);
      return {
        ...state,
        generated: true,
        nnemonic: action.payload,
        privateKey,
        address,
      };
    }
    default:
      return state;
  }
};
