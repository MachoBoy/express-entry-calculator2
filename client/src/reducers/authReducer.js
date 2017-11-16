import {
  GET_USER,
  GET_EMAIL,
  GET_PASSWORD,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_EMAIL:
      return { ...state, email: action.payload };
    case GET_PASSWORD:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: 'Authentication Failed',
        password: '',
        loading: false
      };
    case GET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
