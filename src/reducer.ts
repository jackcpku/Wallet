import {combineReducers} from 'redux';
import seedphraseSlice from './slices/seedphraseSlice';

const rootReducer = combineReducers({
  seedphrase: seedphraseSlice,
});

export default rootReducer;
