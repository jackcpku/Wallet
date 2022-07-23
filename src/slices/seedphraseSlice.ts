import {GENERATE_SEEDPHRASE} from './../const';
import {Action} from '../types/redux';

const initialState = {
  generated: false,
  mnemonic: '',
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case GENERATE_SEEDPHRASE: {
      return {
        ...state,
        generated: true,
        nnemonic: action.payload,
      };
    }
    default:
      return state;
  }
};
