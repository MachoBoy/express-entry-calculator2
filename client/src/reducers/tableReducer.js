import { SELECT } from '../actions/types';

const INITIAL_STATE = { point: 0 };

const tableReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT:
      return { ...state, point: action.payload };
    default:
      return state;
  }
};

export default tableReducer;
